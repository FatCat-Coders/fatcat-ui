#!/bin/bash
files=('package.json' 'README.md' '.changeset' '.npmignore' 'CHANGELOG.md')
npm run build
npm run gen-changelog
for str in ${files[@]}; do
	cp -R $str dist
done
cd dist
npx changeset publish
npm run publish-tag
