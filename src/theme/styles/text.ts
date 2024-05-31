import { css } from 'styled-components';

const base = css`
	font-family: ${props => props.theme.fontFamily.main};
	font-weight: ${props => props.theme.fontWeight.regular};
`;

const baseQuote = css`
	${base}
	font-style: italic;
`;

const baseAllCaps = css`
	${base}
	text-transform: uppercase;
`;

export const TEXT_SIZE = {
	display1: css`
		${base}
		font-size: ${props => props.theme.fontSize.s72};
		line-height: 1.2;
		letter-spacing: -1.4px;
	`,
	display2: css`
		${base}
		font-size: ${props => props.theme.fontSize.s60};
		line-height: 1.1;
		letter-spacing: -1.2px;
	`,
	display3: css`
		${base}
		font-size: ${props => props.theme.fontSize.s48};
		line-height: 1.2;
		letter-spacing: -0.8px;
	`,
	display4: css`
		${base}
		font-size: ${props => props.theme.fontSize.s40};
		line-height: 1.2;
		letter-spacing: -0.6px;
	`,
	display5: css`
		${base}
		font-size: ${props => props.theme.fontSize.s36};
		line-height: 1.2;
		letter-spacing: -0.4px;
	`,
	display6: css`
		${base}
		font-size: ${props => props.theme.fontSize.s32};
		line-height: 1.2;
		letter-spacing: -0.2px;
	`,
	display7: css`
		${base}
		font-size: ${props => props.theme.fontSize.s28};
		line-height: 1.2;
		letter-spacing: 0px;
	`,
	display8: css`
		${base}
		font-size: ${props => props.theme.fontSize.s24};
		line-height: 1.2;
		letter-spacing: 0px;
	`,
	text1: css`
		${base}
		font-size: ${props => props.theme.fontSize.s22};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	text2: css`
		${base}
		font-size: ${props => props.theme.fontSize.s20};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	text3: css`
		${base}
		font-size: ${props => props.theme.fontSize.s18};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	text4: css`
		${base}
		font-size: ${props => props.theme.fontSize.s16};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	text5: css`
		${base}
		font-size: ${props => props.theme.fontSize.s15};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	text6: css`
		${base}
		font-size: ${props => props.theme.fontSize.s14};
		line-height: 1.4;
		letter-spacing: 0.3px;
	`,
	text7: css`
		${base}
		font-size: ${props => props.theme.fontSize.s13};
		line-height: 1.4;
		letter-spacing: 0.3px;
	`,
	quote1: css`
		${baseQuote}
		font-size: ${props => props.theme.fontSize.s24};
		line-height: 1.4;
		letter-spacing: 0px;
	`,
	quote2: css`
		${baseQuote}
		font-size: ${props => props.theme.fontSize.s18};
		line-height: 1.4;
		letter-spacing: 0.2px;
	`,
	ui1: css`
		${base}
		font-size: ${props => props.theme.fontSize.s18};
		line-height: 18;
		letter-spacing: 0.2px;
	`,
	ui2: css`
		${base}
		font-size: ${props => props.theme.fontSize.s16};
		line-height: 16;
		letter-spacing: 0.2px;
	`,
	ui3: css`
		${base}
		font-size: ${props => props.theme.fontSize.s15};
		line-height: 16;
		letter-spacing: 0.2px;
	`,
	ui4: css`
		${base}
		font-size: ${props => props.theme.fontSize.s13};
		line-height: 14;
		letter-spacing: 0.1px;
	`,
	allCaps1: css`
		${baseAllCaps}
		font-size: ${props => props.theme.fontSize.s18};
		line-height: 20;
		letter-spacing: 2px;
	`,
	allCaps2: css`
		${baseAllCaps}
		font-size: ${props => props.theme.fontSize.s16};
		line-height: 20;
		letter-spacing: 2px;
	`,
	allCaps3: css`
		${baseAllCaps}
		font-size: ${props => props.theme.fontSize.s15};
		line-height: 16;
		letter-spacing: 2px;
	`,
	allCaps4: css`
		${baseAllCaps}
		font-size: ${props => props.theme.fontSize.s13};
		line-height: 16;
		letter-spacing: 2px;
	`,
	allCaps5: css`
		${baseAllCaps}
		font-size: ${props => props.theme.fontSize.s11};
		line-height: 12px;
		letter-spacing: 2px;
	`,

};

export type TextSize = keyof typeof TEXT_SIZE;
