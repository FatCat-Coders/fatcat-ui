import { DefaultTheme } from 'styled-components';
import { GAP } from '../gap/gap';

export const SPACE = {
	...GAP,
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
