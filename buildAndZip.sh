#!/bin/zsh

# script to zip on unix systems
npm run build
cd dist
zip dist.zip -r .
mv dist.zip ../dist.zip