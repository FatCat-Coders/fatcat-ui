#!/bin/bash
files=('package.json' 'README.md' '.changeset' '.npmignore' 'CHANGELOG.md')
npm run gen-changelog &&
for str in ${files[@]}; do
  cp -R $str src
done
cd src
npx changeset publish &&
for str in ${files[@]}; do
  rm -rf $str
done
cd ..
npm run publish-tag
