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
	h2: css`
		font-size: ${props => props.theme.fontSize.s32};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h2Tablet: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h3: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h3Tablet: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h4: css`
		font-size: ${props => props.theme.fontSize.s20};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h4Tablet: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h5: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	h6: css`
		font-size: ${props => props.theme.fontSize.s14};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraph: css`
		font-size: ${props => props.theme.fontSize.s24};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraphSmall: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	paragraphTablet: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	text: css`
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	button: css`
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
	`,
	link: css`
		line-height: ${props => props.theme.lineHeight.s150};
	`,
};

export type TextSize = keyof typeof TEXT_SIZE;
