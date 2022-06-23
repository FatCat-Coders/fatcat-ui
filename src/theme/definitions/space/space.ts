import { DefaultTheme } from 'styled-components';

export const SPACE = {
	s0: '0px',
	s4: '4px',
	s8: '8px',
	s12: '12px',
	s16: '16px',
	s20: '20px',
	s24: '24px',
	s28: '28px',
	s32: '32px',
	s36: '36px',
	s40: '40px',
	s44: '44px',
	s48: '48px',
	s52: '52px',
	s56: '56px',
	s64: '64px',
	s72: '72px',
	s80: '80px',
	s88: '88px',
	s96: '96px',
	s104: '104px',
	s112: '112px',
	s120: '120px',
	s136: '136px',
	s152: '152px',
	s168: '168px',
	s184: '184px',
	s200: '200px',
	s232: '232px',
	s264: '264px',
	sauto: 'auto',
} as const;

export type SpaceDefinition = keyof DefaultTheme['space'];

export const SCREEN_RATIO = {
	mobile: 1.8,
	tablet: 1.4,
	largeTablet: 1.2,
};

export const SECTION_WIDTH = {
	normal: '1180px',
	narrow: '1080px',
	ultra_narrow: '850px',
	fluid: '100%',
};
