import { css } from 'styled-components';

export const TEXT_SIZE = {
	h1: css`
		font-size: ${props => props.theme.fontSize.s54};
		line-height: ${props => props.theme.lineHeight.s125};
		font-weight: bold;
	`,
	h1Tablet: css`
		font-size: ${props => props.theme.fontSize.s42};
		line-height: ${props => props.theme.lineHeight.s125};
	`,
	h1Mobile: css`
		font-size: ${props => props.theme.fontSize.s30};
		line-height: ${props => props.theme.lineHeight.s100};
	`,
	h2: css`
		font-size: ${props => props.theme.fontSize.s32};
		line-height: 1.3;
	`,
	h2Mobile: css`
		font-size: ${props => props.theme.fontSize.s28};
	`,
	h3: css`
		font-size: ${props => props.theme.fontSize.s28};
		line-height: 1.7;
	`,
	h3Mobile: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s133};
	`,
	h4: css`
		font-size: ${props => props.theme.fontSize.s28};
		line-height: 1.3;
	`,
	h4Mobile: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s175};
	`,
	h5: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: 1.3;
	`,
	h5Mobile: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s125};
	`,
	h6: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.3;
	`,
	h6Mobile: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s175};
	`,
	paragraph: css`
		font-size: ${props => props.theme.fontSize.s18};
		line-height: 1.5;
		font-weight: normal;
	`,
	paragraphTablet: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.625;
	`,
	button: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
		font-weight: ${props => props.theme.fontWeight.semiBold};
	`,
	link: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.3;
	`,
};

export type TextSize = keyof typeof TEXT_SIZE;
