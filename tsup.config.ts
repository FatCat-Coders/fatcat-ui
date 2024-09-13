import { defineConfig } from 'tsup';

export default defineConfig(options => ({
	splitting: false,
	entry: [
		'./src/index.ts',
	],
	format: ['esm'],
	dts: true,
	minify: !options.watch,
	clean: true,
	...options,
}));
