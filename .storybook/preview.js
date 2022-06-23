import React from 'react';
import { UIThemeProvider } from '../src/theme/theme';

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['Setup', 'Element Props', 'Basic Elements'],
		},
	},
}

export const decorators = [
	(Story) => (
		<UIThemeProvider>
			<Story />
		</UIThemeProvider>
	),
];

