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
		animation: FatCatTheme['animation']
		backgroundColor: FatCatTheme['backgroundColor']
		buttonColor: FatCatTheme['buttonColor']
		buttonSize: FatCatTheme['buttonSize']
		buttonVariant: FatCatTheme['buttonVariant']
		color: FatCatTheme['color']
		fontFamily: FatCatTheme['fontFamily']
		fontSize: FatCatTheme['fontSize']
		fontWeight: FatCatTheme['fontWeight']
		textStyle: FatCatTheme['textStyle']
		hover: FatCatTheme['hover']
		lineHeight: FatCatTheme['lineHeight']
		linkColor: FatCatTheme['linkColor']
		linkStyle: FatCatTheme['linkStyle']
		media: FatCatTheme['media']
		responsive: FatCatTheme['responsive']
		screenRatio: FatCatTheme['screenRatio']
		sectionWidth: FatCatTheme['sectionWidth']
		sideSpace: FatCatTheme['sideSpace'] | 't10'
		space: FatCatTheme['space']
		// space: FatCatTheme['space'] | typeof { s10: '10px' }
		tableStyle: FatCatTheme['tableStyle']
		textColor: FatCatTheme['textColor'] & typeof color
		textSize: FatCatTheme['textSize']
		inputStyle: FatCatTheme['inputStyle']
		ollistStyle: FatCatTheme['ollistStyle']
		ullistStyle: FatCatTheme['ullistStyle']
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
