import { css } from 'styled-components';

export const TEXT_SIZE = {
	h1: css`
		font-size: ${props => props.theme.fontSize.s48};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h1Tablet: css`
		font-size: ${props => props.theme.fontSize.s42};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h1Mobile: css`
		font-size: ${props => props.theme.fontSize.s34};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h2: css`
		font-size: ${props => props.theme.fontSize.s34};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h2Mobile: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h3: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h3Mobile: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h4: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h4Mobile: css`
		font-size: ${props => props.theme.fontSize.s18};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h5: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h5Mobile: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h6: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h6Mobile: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraph: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraphTablet: css`
		font-size: ${props => props.theme.fontSize.s18};
		line-height: ${props => props.theme.lineHeight.s127};
	`,
	text14: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.5;
		font-weight: normal;
	`,
	button: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1;
		letter-spacing: 2px;
	`,
	link: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.3;
	`,
};

export type TextSize = keyof typeof TEXT_SIZE;
