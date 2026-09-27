#!/bin/bash

# Vendor libs
(
  echo "vendoring..."
  cd scripts || exit
  cat draggabilly.pkgd.min.js typed.js powerglitch.min.js > vendor.js
)

VENDOR_JS=$(cat scripts/vendor.js)
export VENDOR_JS
SCRIPT_JS=$(cat scripts/script.js)
export SCRIPT_JS
envsubst < index.pre.html > index.html

rm -rf dist/
# scripts/ is inlined into index.html, so the copies are never requested
rsync --exclude=index.pre.html \
  --exclude=*.sh \
  --exclude=dist/ \
  --exclude=.git* \
  --exclude=.prettierignore \
  --exclude=LICENSE \
  --exclude=README.md \
  --exclude=scripts/ \
  --exclude=node_modules/ \
  --exclude=.DS_Store \
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
