const packages = require('../../package.json');

console.log(
	`npm install ${Object.keys(packages.dependencies).join('@latest ')}@latest ${Object.keys(
		packages.devDependencies
	).join('@latest ')}@latest`
);
