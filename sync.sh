#!/bin/bash

rsync -av . dist/ --exclude dist/ --exclude .git/ --exclude .gitignore

echo "Minifying everything we can"
find ./dist/ -type f \( \
  -name "*.html" \
  -o -name '*.js' \
  -o -name '*.css' \
  -o -name '*.svg' \
  -o -name "*.xml" \
  -o -name "*.json" \
  -o -name "*.htm" \
  \) \
  -and ! -name "*.min*" -print0 |
  xargs -0 -n1 -P4 -I '{}' sh -c 'minify -o "{}" "{}"'
