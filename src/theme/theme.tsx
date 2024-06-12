import React from 'react';
import { ThemeProvider } from 'styled-components';
import { isObjectEmpty, deepmerge } from '../utils/object-helpers';

// Definitions
import {
	ANIMATIONS,
	BUTTON_COLOR,
	BUTTON_SIZE,
	BUTTON_VARIANT,
	COLOR,
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	TEXT_VARIANT,
	INPUT_VARIANT,
	LINE_HEIGHT,
	// LINK_VARIANT,
	MEDIA,
	OLLIST_VARIANT,
	SCREEN_RATIO,
	SECTION_WIDTH,
	SPACE,
	TABLE_VARIANT,
	ULLIST_VARIANT,
	GAP,
	BORDER_RADIUS,
	SHADOW,
	DROP_SHADOW,
	FOCUS_SHADOW,
	SECTION_VARIANT,
} from './definitions';
import { HOVER_BEHAVIORS, RESPONSIVE_BEHAVIORS, TEXT_SIZE } from './styles';
import { SideSpacingTypesValue } from './props';

export interface FatCatTheme {
	useMobileFirst: boolean
	animation: typeof ANIMATIONS
	backgroundColor: typeof COLOR
	buttonColor: typeof BUTTON_COLOR
	buttonSize: typeof BUTTON_SIZE
	buttonVariant: typeof BUTTON_VARIANT
	color: typeof COLOR
	fontFamily: typeof FONT_FAMILY
	fontSize: typeof FONT_SIZE
	fontWeight: typeof FONT_WEIGHT
	textVariant: typeof TEXT_VARIANT
	hover: typeof HOVER_BEHAVIORS
	lineHeight: typeof LINE_HEIGHT
	// linkVariant: typeof LINK_VARIANT
	media: typeof MEDIA
	responsive: typeof RESPONSIVE_BEHAVIORS
	screenRatio: typeof SCREEN_RATIO
	sectionWidth: typeof SECTION_WIDTH
	sideSpace?: SideSpacingTypesValue
	space: typeof SPACE
	tableVariant: typeof TABLE_VARIANT
	textColor: typeof COLOR
	textSize: typeof TEXT_SIZE
	inputVariant: typeof INPUT_VARIANT
	ollistVariant: typeof OLLIST_VARIANT,
	ullistVariant: typeof ULLIST_VARIANT,
	gap: typeof GAP,
	borderRadius: typeof BORDER_RADIUS,
	shadow: typeof SHADOW,
	dropShadow: typeof DROP_SHADOW,
	focusShadow: typeof FOCUS_SHADOW,
	sectionVariant: typeof SECTION_VARIANT,
}

declare module 'styled-components' {
	// eslint-disable-next-line
	interface DefaultTheme extends FatCatTheme {}
}

const defaultTheme: FatCatTheme = {
	useMobileFirst: false,
	animation: ANIMATIONS,
	backgroundColor: COLOR,
	buttonColor: BUTTON_COLOR,
	buttonSize: BUTTON_SIZE,
	buttonVariant: BUTTON_VARIANT,
	color: COLOR,
	fontFamily: FONT_FAMILY,
	fontSize: FONT_SIZE,
	fontWeight: FONT_WEIGHT,
	textVariant: TEXT_VARIANT,
	hover: HOVER_BEHAVIORS,
	lineHeight: LINE_HEIGHT,
	// linkVariant: LINK_VARIANT,
	media: MEDIA,
	responsive: RESPONSIVE_BEHAVIORS,
	screenRatio: SCREEN_RATIO,
	sectionWidth: SECTION_WIDTH,
	space: SPACE,
	tableVariant: TABLE_VARIANT,
	textColor: COLOR,
	textSize: TEXT_SIZE,
	inputVariant: INPUT_VARIANT,
	ollistVariant: OLLIST_VARIANT,
	ullistVariant: ULLIST_VARIANT,
	gap: GAP,
	borderRadius: BORDER_RADIUS,
	shadow: SHADOW,
	dropShadow: DROP_SHADOW,
	focusShadow: FOCUS_SHADOW,
	sectionVariant: SECTION_VARIANT,
};

interface UIThemeProviderProps {
	theme?: FatCatTheme
	children: React.ReactNode
}

export function UIThemeProvider(props: UIThemeProviderProps) {
	const {
		theme,
		children,
	} = props;

	let mergedTheme;
	if (theme && !isObjectEmpty(theme)) {
		mergedTheme = deepmerge(defaultTheme, theme);
		if (theme.media && !isObjectEmpty(theme.media)) {
			mergedTheme.media = theme.media;
		}
	}
	const newTheme = mergedTheme || defaultTheme;

	return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}

UIThemeProvider.defaultProps = {
	theme: undefined,
};
