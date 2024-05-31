import { darken } from 'polished';

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

export const BUTTON_COLOR = {
	disabled: {
		default: COLOR.primary50,
		text: COLOR.primary500,
	},
	primary: {
		default: COLOR.primary200,
		text: COLOR.neutrals50,
		hover: COLOR.primary600,
		hoverText: COLOR.neutrals50,
	},
	secondary: {
		default: COLOR.primary600,
		text: COLOR.primary600,
		hover: COLOR.primary600,
		hoverText: COLOR.neutrals50,
	},
	ghost: {
		default: COLOR.transparent,
		text: COLOR.neutrals800,
		hover: COLOR.yellow100,
		hoverText: COLOR.neutrals50,
	},
	white: {
		default: COLOR.neutrals50,
		text: COLOR.primary600,
		hover: darken(0.1, COLOR.neutrals50),
		hoverText: COLOR.neutrals50,
	},
	underline: {
		default: COLOR.primary600,
		text: COLOR.primary600,
	},
};
