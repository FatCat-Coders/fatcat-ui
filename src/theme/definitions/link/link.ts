import { css, DefaultTheme } from 'styled-components';

export const LINK_BASE = css<{ disabled?: boolean, linkColor: keyof DefaultTheme['linkColor'] }>`
	${props => props.theme.textVariant.link};
	color: ${props => props.theme.linkColor[props.linkColor].default};
	width: fit-content;
	&:hover {
		color: ${props => props.theme.linkColor[props.linkColor].hover};
	}
	${props => props.disabled && css`
		cursor: not-allowed;
		pointer-events: none;
		color: ${props => props.theme.color.neutrals700};
	`}
`;

export const LINK_VARIANT = {
	primary: css`
		${LINK_BASE}
	`,
	underline: css`
		text-decoration: underline;
		${LINK_BASE}
	`,
	noStyle: css``,
};
