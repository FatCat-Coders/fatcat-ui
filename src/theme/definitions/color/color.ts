import { darken, opacify } from 'polished';

export const COLOR = {
	primary: '#232737',
	primaryLight: '#232737E6',
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
	grey200: '#DDDDDD',
	greyLight: '#67727B',
	darkerGrey: '#6B6B6B',
	lightGrey: '#F5F5F5',
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
	warning: '#DE3131',
	primary50: '#F9FAFF',
	primary100: '#EBECFE',
	primary200: '#D8D9FE',
	primary300: '#B0B3FC',
	primary400: '#898DFB',
	primary500: '#757AFA',
	primary600: '#5C62F9',
	primary700: '#4E54F9',
	primary800: '#3A40F8',
	primary900: '#262DF7',
	cream: '#F9F6F3',
	neutrals50: '#FFFFFF',
	neutrals100: '#F2F3F5',
	neutrals200: '#E6E6EA',
	neutrals300: '#CCCED5',
	neutrals400: '#999CAB',
	neutrals500: '#676B81',
	neutrals600: '#343957',
	neutrals700: '#2E324D',
	neutrals800: '#01082D',
	successDark: '#067647',
	successMedium: '#079455',
	successLight: '#ECFDF3',
};

export const LINK_COLOR = {
	primary: {
		default: COLOR.primary,
		hover: darken(0.1, COLOR.primary),
	},
};

export const BUTTON_COLOR = {
	primary: {
		default: {
			background: COLOR.primary600,
			text: COLOR.white,
		},
		hover: {
			background: COLOR.primary700,
			text: COLOR.white,
		},
		pressed: {
			background: COLOR.primary800,
			text: COLOR.white,
		},
		focus: {
			background: COLOR.primary700,
			text: COLOR.white,
			ringColor: opacify(0.32, COLOR.primary600),
		},
	},
	secondary: {
		default: {
			background: COLOR.neutrals100,
			text: COLOR.neutrals600,
		},
		hover: {
			background: COLOR.cream,
			text: COLOR.neutrals600,
		},
		pressed: {
			background: COLOR.cream,
			text: COLOR.neutrals600,
		},
		focus: {
			background: COLOR.cream,
			text: COLOR.neutrals600,
			ringColor: opacify(0.32, COLOR.primary600),
		},
	},
	secondaryInvert: {
		default: {
			background: COLOR.neutrals600,
			text: COLOR.white,
		},
		hover: {
			background: COLOR.neutrals700,
			text: COLOR.white,
		},
		pressed: {
			background: opacify(0.88, COLOR.neutrals700),
			text: COLOR.white,
		},
		focus: {
			background: COLOR.neutrals600,
			text: COLOR.white,
			ringColor: opacify(0.32, COLOR.white),
		},
	},
	ghost: {
		default: {
			background: COLOR.transparent,
			text: COLOR.primary600,
		},
		hover: {
			background: COLOR.primary50,
			text: COLOR.primary700,
		},
		pressed: {
			background: COLOR.primary100,
			text: COLOR.primary800,
		},
		focus: {
			background: COLOR.cream,
			text: COLOR.primary700,
			ringColor: opacify(0.32, COLOR.primary600),
		},
	},
	ghostInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		hover: {
			background: opacify(0.06, COLOR.white),
			text: COLOR.neutrals50,
		},
		pressed: {
			background: opacify(0.08, COLOR.white),
			text: COLOR.neutrals50,
		},
		focus: {
			background: opacify(0.06, COLOR.white),
			text: COLOR.neutrals50,
			ringColor: opacify(0.56, COLOR.white),
		},
	},
	outline: {
		default: {
			background: COLOR.transparent,
			text: COLOR.primary700,
		},
		hover: {
			background: COLOR.primary50,
			text: COLOR.primary700,
		},
		pressed: {
			background: COLOR.primary100,
			text: COLOR.primary800,
		},
		focus: {
			background: opacify(0.04, COLOR.white),
			text: COLOR.primary700,
			ringColor: opacify(0.32, COLOR.primary600),
		},
	},
	outlineInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		hover: {
			background: opacify(0.04, COLOR.white),
			text: COLOR.neutrals50,
		},
		pressed: {
			background: opacify(0.06, COLOR.white),
			text: COLOR.neutrals50,
		},
		focus: {
			background: opacify(0.04, COLOR.white),
			text: COLOR.neutrals50,
			ringColor: opacify(0.32, COLOR.white),
		},
	},
	textLink: {
		default: {
			background: COLOR.transparent,
			text: COLOR.primary600,
		},
		hover: {
			background: COLOR.transparent,
			text: COLOR.primary700,
		},
		pressed: {
			background: COLOR.transparent,
			text: COLOR.primary800,
		},
		focus: {
			background: COLOR.transparent,
			text: COLOR.primary700,
			ringColor: opacify(0.32, COLOR.primary600),
		},
	},
	textLinkInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals50,
		},
		hover: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		pressed: {
			background: COLOR.transparent,
			text: COLOR.neutrals200,
		},
		focus: {
			background: opacify(0.02, COLOR.white),
			text: COLOR.neutrals200,
			ringColor: opacify(0.32, COLOR.white),
		},
	},
	navLink: { // todo mobile is a bit different
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals500,
		},
		hover: {
			background: COLOR.transparent,
			text: COLOR.neutrals600,
			underLineColor: COLOR.primary600,
		},
		pressed: {
			background: COLOR.transparent,
			text: COLOR.neutrals700,
			underLineColor: COLOR.primary700,
		},
		focus: {
			background: COLOR.transparent,
			text: COLOR.neutrals600,
			ringColor: COLOR.transparent,
			underLineColor: COLOR.primary600,
		},
	},
	navLinkInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		hover: {
			background: COLOR.transparent,
			text: COLOR.neutrals50,
			underLineColor: COLOR.primary600,
		},
		pressed: {
			background: COLOR.transparent,
			text: COLOR.neutrals300,
			underLineColor: COLOR.primary700,
		},
		focus: {
			background: opacify(0.02, COLOR.white),
			text: COLOR.neutrals50,
			ringColor: COLOR.transparent,
			underLineColor: COLOR.primary600,
		},
	},
	success: {
		default: {
			background: COLOR.successMedium,
			text: COLOR.successDark,
		},
		hover: {
			background: COLOR.successLight,
			text: COLOR.successDark,
		},
		pressed: {
			background: COLOR.successLight,
			text: COLOR.successDark,
		},
		focus: {
			background: COLOR.successLight,
			text: COLOR.successDark,
			ringColor: COLOR.transparent,
		},
	},
};

export const TEXT_COLOR = {
	primary: COLOR.primary,
	secondary: COLOR.darkerGrey,
	black: COLOR.blackLighter,
	yellow: COLOR.yellow,
	white: COLOR.white,
	warning: COLOR.warning,
};

export const BACKGROUND_COLOR = {
	primary: COLOR.primary,
	transparent: COLOR.transparent,
	grey: COLOR.grey,
	lightGrey: COLOR.lightGrey,
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
