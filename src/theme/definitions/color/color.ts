export const COLOR = {
	primary: '#3D7FEB',
	primaryLight: '#3D7FEBE6',
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
	green: '#00FF00',
	transparent: 'transparent',
	disabled: '#E0E2EC',
	disabledDark: '#A0A3AF',
};

export const LINK_COLOR = {
	primary: COLOR.primary,
};

export const BUTTON_COLOR = {
	disabled: {
		default: COLOR.disabled,
		text: COLOR.disabledDark,
	},
	primary: {
		default: COLOR.primaryLight,
		text: COLOR.white,
		hover: COLOR.primary,
		hoverText: COLOR.white,
	},
	secondary: {
		default: COLOR.primary,
		text: COLOR.primary,
		hover: COLOR.primary,
		hoverText: COLOR.white,
	},
	ghost: {
		default: COLOR.transparent,
		text: COLOR.black,
		hover: COLOR.yellow10,
		hoverText: COLOR.white,
	},
	underline: {
		default: COLOR.primary,
		text: COLOR.primary,
	},
};

export const TEXT_COLOR = {
	primary: COLOR.primary,
	secondary: COLOR.darkerGrey,
	black: COLOR.blackLighter,
	yellow: COLOR.yellow,
};

export const BACKGROUND_COLOR = {
	transparent: COLOR.transparent,
	grey: COLOR.grey,
	backgroundUltraDark: COLOR.blackHigh,
	backgroundDark: COLOR.dark,
	background: COLOR.blackLow,
	backgroundLight: COLOR.blackLight,
	backgroundLighter: COLOR.blackLighter,
	purple: COLOR.purple,
	yellow: COLOR.yellow,
	white: COLOR.white,
	green: COLOR.green,
	wistiaOverlay: 'rgba(130, 130, 130, 0.6)',
};
