import React from 'react';

// Atoms
import { GlobalStyle } from 'fatcat-ui-library/components/Atoms';

// // Fonts
import '../assets/fonts/silka/stylesheet.css';

// Themes
import { UIThemeProvider, FatCatTheme } from 'fatcat-ui-library/theme/theme';

const color = {
	test: '#123456',
} as const;

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		textColor: FatCatTheme['textColor'] & typeof color;
		sideSpace: FatCatTheme['sideSpace'] | 't10'
		// space: FatCatTheme['space'] | typeof { s10: '10px' }
	}
}

const Index: React.FC = (props) => {
	const { children } = props;
	return (
		<UIThemeProvider theme={{ textColor: { test: '#123456' }, space: { s10: '10px' } }}>
			<GlobalStyle />
			{children}
		</UIThemeProvider>
	);
};

export default Index;
