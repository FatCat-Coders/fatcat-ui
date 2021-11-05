import React from 'react';
import 'styled-components';
import { DefaultTheme, ThemeProvider } from 'styled-components';

// Definitions
import {
	SECTION_WIDTH,
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	LINE_HEIGHT,
	COLOR,
	SPACE,
	SCREEN_RATIO,
	LINK_COLOR,
	BUTTON_COLOR,
	TEXT_COLOR,
	BACKGROUND_COLOR,
} from './definitions';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: typeof COLOR;
		backgroundColor: typeof BACKGROUND_COLOR;
		fontSize: typeof FONT_SIZE;
		fontWeight: typeof FONT_WEIGHT;
		lineHeight: typeof LINE_HEIGHT;
		fontFamily: typeof FONT_FAMILY;
		sectionWidth: typeof SECTION_WIDTH;
		space: typeof SPACE;
		screenRatio: typeof SCREEN_RATIO;
		linkColor: typeof LINK_COLOR;
		buttonColor: typeof BUTTON_COLOR;
		textColor: typeof TEXT_COLOR;
	}
}

const theme: DefaultTheme = {
	color: COLOR,
	backgroundColor: BACKGROUND_COLOR,
	fontSize: FONT_SIZE,
	fontWeight: FONT_WEIGHT,
	fontFamily: FONT_FAMILY,
	lineHeight: LINE_HEIGHT,
	sectionWidth: SECTION_WIDTH,
	space: SPACE,
	screenRatio: SCREEN_RATIO,
	linkColor: LINK_COLOR,
	buttonColor: BUTTON_COLOR,
	textColor: TEXT_COLOR,
};

export const UIThemeProvider: React.FC = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
