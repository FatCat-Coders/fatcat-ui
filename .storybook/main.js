module.exports = {
	"stories": [
		"../stories/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	"framework": {
		name: "@storybook/react-webpack5",
		options: {}
	},
	docs: {
		autodocs: true
	}
};
