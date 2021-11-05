export const MEDIA = {
	mobile: '@media screen and (max-width: 480px)',
	tablet: '@media screen and (max-width: 768px)',
	largeTablet: '@media screen and (max-width: 992px)',
	desktop: '@media screen and (max-width: 1200px)',
	desktopStandard: '@media screen and (max-width: 1400px)',
	largeDesktop: '@media screen and (max-width: 1920px)',
	mobileMin: '@media screen and (min-width: 769px)',
	noHover: '@media (hover: none)',
	ie: '@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)',
} as const;

export type MediaDefinition = keyof typeof MEDIA;
