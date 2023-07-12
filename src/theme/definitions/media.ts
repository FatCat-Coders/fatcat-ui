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

export const MEDIA_MOBILE = {
	wideDesktop: '@media screen and (min-width: 1921px)',
	largeDesktop: '@media screen and (min-width: 1401px)',
	standardDesktop: '@media screen and (min-width: 1201px)',
	desktop: '@media screen and (min-width: 993px)',
	largeTablet: '@media screen and (min-width: 769px)',
	tablet: '@media screen and (min-width: 481px)',
	mobile: '@media screen and (max-width: 480px)',
	noHover: '@media (hover: none)',
};

export type MediaMobileDefinition = keyof DefaultTheme['mediaMobile'];
