import { css } from 'styled-components';
import { LINK_COLOR } from '../color/color';

const BASE = css<{ disabled?: boolean, linkColor?: typeof LINK_COLOR }>`
	${props => props.theme.textStyle.link};
	color: ${props => props.theme.linkColor[props.linkColor].default};
	width: fit-content;
	&:hover {
		color: ${props => props.theme.linkColor[props.linkColor].hover};
	}
	${props => props.disabled && css`
		cursor: not-allowed;
		pointer-events: none;
		color: ${props => props.theme.color.darkerGrey};
	`}
`;

export const LINK_STYLE = {
	base: css`
		${BASE}
	`,
	underline: css`
		text-decoration: underline;
		${BASE}
	`,
};
