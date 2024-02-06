/* eslint @typescript-eslint/no-var-requires: 0 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function getAllFiles(dirPath, arrayOfFiles = []) {
	const files = fs.readdirSync(dirPath);

	files.forEach((file) => {
		const filePath = path.join(dirPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			// eslint-disable-next-line no-param-reassign
			arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
		} else {
			arrayOfFiles.push(filePath);
		}
	});

	return arrayOfFiles;
}


const srcDirPath = path.join(__dirname, 'src');
const data = getAllFiles(srcDirPath)
	.filter(file => !file.endsWith('.md'))
	.filter(file => !file.endsWith('.stories.tsx'))
	.filter(file => !file.endsWith('.d.ts'));

esbuild.build({
	entryPoints: data,
	outdir: 'dist/src',
	bundle: false,
	minify: true,
	sourcemap: true,
	target: 'es2015',
	loader: {
		'.png': 'file',
		'.jpg': 'file',
		'.jpeg': 'file',
		'.svg': 'file',
		'.gif': 'file',
	},
})
	.catch(() => process.exit(1));
