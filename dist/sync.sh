#!/bin/bash

rsync -av . dist/ --exclude dist/ --exclude .git/ --exclude .gitignore
