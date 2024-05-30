import { darken, transparentize } from 'polished';
import { COLOR } from '../color/color';

export const SHADOW = {
	xs: '0px 1px 2px 0px #1018280D',
	sm: '0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A',
	md: '0px 2px 4px -2px #1018280F, 0px 4px 8px -2px #1018281A',
	lg: '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
	xl: '0px 8px 8px -4px #10182808, 0px 20px 24px -4px #10182814',
	'2xl': '0px 24px 48px -12px #1018282E',
	'3xl': '0px 32px 64px -12px #10182824',
	primaryBtnMobile: '0px 10px 22px 0px #00000014, 0px 39px 39px 0px #00000012, 0px 88px 53px 0px #0000000A, 0px 157px 63px 0px #00000003, 0px 246px 69px 0px #00000000',
};

export const DROP_SHADOW = `
	drop-shadow(0px 2.2px 5.5px rgba(0, 0, 0, 0.02))
	drop-shadow(0px 11px 11px rgba(0, 0, 0, 0.02))
	drop-shadow(0px 24.2px 14.3px rgba(0, 0, 0, 0.01))
	drop-shadow(0px 42.9px 17.6px rgba(0, 0, 0, 0.00))
	drop-shadow(0px 67.1px 18.7px rgba(0, 0, 0, 0.00))
`;

// TODO add this to the button focus when merged
// TODO remove button ring color when merged
export const FOCUS_SHADOW = {
	'focus-1': `0px 0px 0px 2px ${transparentize(0.32, COLOR.primary600)}`,
	'focus-2': `0px 0px 0px 4px ${transparentize(0.32, COLOR.primary600)}`,
	'focus-2-inverted': `0px 0px 0px 4px ${transparentize(0.56, COLOR.white)}`,
};
