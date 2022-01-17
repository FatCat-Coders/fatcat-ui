import { css } from 'styled-components';

export const BUTTON_STYLE = {
	base: css`
		color: ${props => props.theme.color.white};
		background: ${props => props.theme.color.purple};
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s20};
		${props => props.theme.textSize.button};
		&:hover {
			background: ${props => props.theme.color.darkerPurple};
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	white: css`
		color: ${props => props.theme.color.darkerPurple};
		background: ${props => props.theme.color.white};
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s20};
		${props => props.theme.textSize.button};
		border: 1px solid ${props => props.theme.color.white};
		&:hover {
			background: ${props => props.theme.color.purple};
			color: ${props => props.theme.color.white};
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	outline: css`
		color: ${props => props.theme.color.white};
		background: transparent;
		border: 1px solid ${props => props.theme.color.white};
		${props => props.theme.textSize.button};
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s20};
		&:hover {
			background: ${props => props.theme.color.white};
			color: ${props => props.theme.color.blackLight};
		}
	`,
} as const;
