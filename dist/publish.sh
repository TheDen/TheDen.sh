#!/bin/bash

git push origin $(git subtree split --prefix dist main):gh-pages --force
