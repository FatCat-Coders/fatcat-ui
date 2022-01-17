import { css } from 'styled-components';

export const LINK_STYLE = {
	base: css`
		color: ${props => props.theme.color.yellow};
		font-weight: ${props => props.theme.fontWeight.bold};
		${props => props.theme.textSize.link}
		letter-spacing: 2px;
		width: fit-content;
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
		&:hover {
			padding-bottom: 2px;
			border-bottom: 1px solid ${props => props.theme.color.yellow};
			width: fit-content;
		}
	`,
	underline: css`
		color: -webkit-link;
		text-decoration: underline;
	`,
	disabled: css`
		color: ${props => props.theme.color.grey};
		cursor: not-allowed;
	`,
} as const;
