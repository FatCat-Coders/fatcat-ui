import { DefaultTheme } from 'styled-components';

export const MEDIA = {
	wideDesktop: '@media screen and (min-width: 1921px)',
	largeDesktop: '@media screen and (max-width: 1920px)',
	standardDesktop: '@media screen and (max-width: 1400px)',
	desktop: '@media screen and (max-width: 1200px)',
	largeTablet: '@media screen and (max-width: 992px)',
	tablet: '@media screen and (max-width: 768px)',
	mobile: '@media screen and (max-width: 480px)',
	noHover: '@media (hover: none)',
};

export type MediaDefinition = keyof DefaultTheme['media'];
