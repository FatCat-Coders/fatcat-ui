import { css, DefaultTheme } from 'styled-components';

export const LINK_BASE = css<{ disabled?: boolean, linkColor: keyof DefaultTheme['color'] }>`
	${props => props.theme.textVariant.link};
	color: ${props => props.theme.color[props.linkColor]};
	width: fit-content;
	&:hover {
		color: ${props => props.theme.color[props.linkColor]};
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
