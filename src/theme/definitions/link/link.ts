import { css } from 'styled-components';

const BASE = css<{ disabled?: boolean }>`
	color: ${props => props.theme.color.grey};
	width: fit-content;
	text-decoration: none;
	&:hover {
		color: ${props => props.theme.color.primary};
	}
	${props =>
		props.disabled &&
		css`
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
		${BASE}
		color: -webkit-link;
		text-decoration: underline;
	`,
};
