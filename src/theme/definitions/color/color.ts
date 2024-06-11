import { transparentize } from 'polished';
import { TButtonColor } from 'src/utils/types';

export const COLOR = {
	transparent: 'transparent',
	// brand/primary
	primary50: '#F9FAFF',
	primary100: '#EBECFE',
	primary200: '#D8D9FE',
	primary300: '#B0B3FC',
	primary400: '#898DFB',
	primary500: '#757AFA',
	primary600: '#5C62F9', // base
	primary700: '#4E54F9',
	primary800: '#3A40F8',
	primary900: '#262DF7',
	// brand/secondary
	// yellow
	yellow50: '#FFFBEB',
	yellow100: '#FFF7D6',
	yellow200: '#FFF3C2',
	yellow300: '#FFEFAD',
	yellow400: '#FFE785',
	yellow500: '#FFDE5C',
	yellow600: '#FFD633',
	yellow700: '#FFCC00', // base
	yellow800: '#F5C400',
	yellow900: '#E0B400',
	// pink
	pink50: '#FFF6F7',
	pink100: '#FFF0F1',
	pink200: '#FFE5E7',
	pink300: '#FDD8DB',
	pink400: '#FCC5C8',
	pink500: '#FA9EA4',
	pink600: '#F97F88',
	pink700: '#F9777F', // base
	pink800: '#F8636D',
	pink900: '#F7505B',
	// mint
	mint50: '#EFFBF7',
	mint100: '#DFF6F0',
	mint200: '#CFF2E8',
	mint300: '#AEEAD9',
	mint400: '#AEEAD9',
	mint500: '#4ED0AB',
	mint600: '#35C89F', // base
	mint700: '#2FB18C',
	mint800: '#2BA180',
	mint900: '#228166',
	// neutrals
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
	// feedback/semantics
	// success
	successDark: '#067647',
	successMedium: '#079455',
	successLight: '#ECFDF3',
	// error
	errorExtraDark: '#B42318',
	errorDark: '#D92D20',
	errorMedium: '#F04438',
	errorLight: '#FEF3F2',
	// warning
	warningDark: '#B54708',
	warningMedium: '#DC6803',
	warningLight: '#FEF0C7',
	// info
	infoExtraDark: '#0E6BAA',
	infoDark: '#0F77BD',
	infoMedium: '#1D99ED',
	infoLight: '#D9EEFC',
};

export const BUTTON_COLOR:TButtonColor = {
	primary: {
		default: {
			background: COLOR.primary600,
			text: COLOR.neutrals50,
		},
		hover: {
			background: COLOR.primary700,
			text: COLOR.neutrals50,
		},
		pressed: {
			background: COLOR.primary800,
			text: COLOR.neutrals50,
		},
		focus: {
			background: COLOR.primary700,
			text: COLOR.neutrals50,
			ringColor: transparentize(0.32, COLOR.primary600),
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
			ringColor: transparentize(0.32, COLOR.primary600),
		},
	},
	secondaryInvert: {
		default: {
			background: COLOR.neutrals600,
			text: COLOR.neutrals50,
		},
		hover: {
			background: COLOR.neutrals700,
			text: COLOR.neutrals50,
		},
		pressed: {
			background: transparentize(0.88, COLOR.neutrals700),
			text: COLOR.neutrals50,
		},
		focus: {
			background: COLOR.neutrals600,
			text: COLOR.neutrals50,
			ringColor: transparentize(0.32, COLOR.neutrals50),
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
			ringColor: transparentize(0.32, COLOR.primary600),
		},
	},
	ghostInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		hover: {
			background: transparentize(0.06, COLOR.neutrals50),
			text: COLOR.neutrals50,
		},
		pressed: {
			background: transparentize(0.08, COLOR.neutrals50),
			text: COLOR.neutrals50,
		},
		focus: {
			background: transparentize(0.06, COLOR.neutrals50),
			text: COLOR.neutrals50,
			ringColor: transparentize(0.56, COLOR.neutrals50),
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
			background: transparentize(0.04, COLOR.neutrals50),
			text: COLOR.primary700,
			ringColor: transparentize(0.32, COLOR.primary600),
		},
	},
	outlineInvert: {
		default: {
			background: COLOR.transparent,
			text: COLOR.neutrals100,
		},
		hover: {
			background: transparentize(0.04, COLOR.neutrals50),
			text: COLOR.neutrals50,
		},
		pressed: {
			background: transparentize(0.06, COLOR.neutrals50),
			text: COLOR.neutrals50,
		},
		focus: {
			background: transparentize(0.04, COLOR.neutrals50),
			text: COLOR.neutrals50,
			ringColor: transparentize(0.32, COLOR.neutrals50),
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
			ringColor: transparentize(0.32, COLOR.primary600),
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
			background: transparentize(0.02, COLOR.neutrals50),
			text: COLOR.neutrals200,
			ringColor: transparentize(0.32, COLOR.neutrals50),
		},
	},
	navLink: {
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
			background: transparentize(0.02, COLOR.neutrals50),
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
