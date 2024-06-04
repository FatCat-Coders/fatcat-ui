import { DefaultTheme } from 'styled-components';

export const SPACE = {
	s0: '0px',
	's0.5': '2px',
	s1: '4px',
	's1.5': '6px',
	s2: '4px',
	s3: '12px',
	s4: '16px',
	s5: '20px',
	s6: '24px',
	s8: '32px',
	s10: '40px',
	s12: '48px',
	s16: '64px',
	s20: '80px',
	s24: '96px',
	s32: '128px',
	s40: '160px',
	s48: '192px',
	s56: '224px',
	s64: '256px',
	s80: '320px',
	s96: '384px',
	s120: '480px',
	s140: '560px',
	s160: '640px',
	s180: '720px',
	s192: '768px',
	s256: '1024px',
	s328: '1312px',
	s360: '1440px',
	s400: '1600px',
	s480: '1920px',
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
