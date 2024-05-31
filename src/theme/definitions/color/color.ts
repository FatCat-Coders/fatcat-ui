import { darken } from 'polished';

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
	///
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
	ywllow900: '#262DF7',
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
	white: {
		default: COLOR.white,
		text: COLOR.primary,
		hover: darken(0.1, COLOR.white),
		hoverText: COLOR.white,
	},
	underline: {
		default: COLOR.primary,
		text: COLOR.primary,
	},
};
