import { css } from 'styled-components';

export const TEXT_SIZE = {
	h1: css`
		font-size: ${props => props.theme.fontSize.s48};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h1Tablet: css`
		font-size: ${props => props.theme.fontSize.s32};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h1Mobile: css`
		font-size: ${props => props.theme.fontSize.s32};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h2: css`
		font-size: ${props => props.theme.fontSize.s32};
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
		font-size: ${props => props.theme.fontSize.s16};
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
	paragraph16: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraphMobile: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	text14: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: ${props => props.theme.lineHeight.s150};
		font-weight: normal;
	`,
	button: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	link: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
};

export type TextSize = keyof typeof TEXT_SIZE;
