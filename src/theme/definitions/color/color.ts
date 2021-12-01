export const COLOR = {
	black: '#000000',
	dark: '#0A0A0A',
	blackHigh: '#030303',
	blackLow: '#121212',
	blackLight: '#171717',
	blackLighter: '#1D1D1E',
	white: '#FFFFFF',
	white10: 'rgba(255, 255, 255, 0.1)',
	white20: 'rgba(255, 255, 255, 0.2)',
	white50: 'rgba(255, 255, 255, 0.5)',
	darkestGray: '#121212',
	grey: '#BEBEBE',
	darkerGrey: '#6B6B6B',
	purple: '#5E1A6F',
	purpleLight: '#755DB9',
	darkerPurple: '#50145F',
	darkestPurple: '#470F55',
	orange: '#FFA500',
	yellow: '#FFB82D',
	yellow10: 'rgba(255,184,45, 0.1)',
	transparent: 'transparent',
} as const;

export type ColorDefinition = keyof typeof COLOR;

export const LINK_COLOR = {
	primary: COLOR.yellow,
} as const;

export type LinkColorDefinition = keyof typeof LINK_COLOR;

export const BUTTON_COLOR = {
	fcc: COLOR.purple,
} as const;

export type ButtonColorDefinition = keyof typeof BUTTON_COLOR;

export const TEXT_COLOR = {
	primary: COLOR.white,
	secondary: COLOR.darkerGrey,
	black: COLOR.blackLighter,
	yellow: COLOR.yellow,
} as const;

export type TextColorDefinition = keyof typeof TEXT_COLOR;

export const BACKGROUND_COLOR = {
	transparent: COLOR.transparent,
	backgroundUltraDark: COLOR.blackHigh,
	backgroundDark: COLOR.dark,
	background: COLOR.blackLow,
	backgroundLight: COLOR.blackLight,
	backgroundLighter: COLOR.blackLighter,
	purple: COLOR.purple,
	yellow: COLOR.yellow,
	white: COLOR.white,
	wistiaOverlay: 'rgba(130, 130, 130, 0.6)',
} as const;

export type BackgroundColorDefinition = keyof typeof BACKGROUND_COLOR;
