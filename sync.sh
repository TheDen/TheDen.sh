#!/bin/bash

# Vendor libs
(
  echo "vendoring..."
  cd scripts || exit
  cat dayjs-duration-utc.js draggabilly.pkgd.min.js typed.js powerglitch.min.js > vendor.js
)

VENDOR_JS=$(cat scripts/vendor.js)
export VENDOR_JS
SCRIPT_JS=$(cat scripts/script.js)
export SCRIPT_JS
index.pre.html < envsubst > index.html

rm -rf dist/
rsync --exclude=index.pre.html \
  --exclude=*.sh \
  --exclude=dist/ \
  --exclude=.git* \
  --exclude=.prettierignore \
  --exclude=README.md \
  --delete -av . dist/

echo "run prettier"
prettier -w .

cpu_cores="$(nproc)"

echo "Minifying everything we can"
find ./dist/ -type f \( \
  -name "*.html" \
  -o -name '*.js' \
  -o -name '*.css' \
  -o -name '*.svg' \
  -o -name "*.xml" \
  -o -name "*.json" \
  -o -name "*.html" \
  \) \
  -and ! -name "*.min*" -print0 |
  xargs -0 -n1 -P"${cpu_cores}" -I '{}' sh -c 'minify -o "{}" "{}"'
