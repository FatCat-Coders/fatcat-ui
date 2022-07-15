import { css } from 'styled-components';
import { BUTTON_COLOR } from '../color/color';

export const BUTTON_SIZE = {
	large: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s40};
	`,
	medium: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s24};
	`,
	small: css`
		padding: ${props => props.theme.space.s8} ${props => props.theme.space.s24};
	`,
	nav: css`
		padding: ${props => props.theme.space.s4} ${props => props.theme.space.s16};
	`,
};

const buttonBase = css<{size: keyof typeof BUTTON_SIZE}>`
	${props => props.size && BUTTON_SIZE[props.size]};
	border-radius: 4px;
`;

export const BUTTON_VARIANT = {
	primary: css<{color: typeof BUTTON_COLOR }>`
		border: none;
		color: ${props => props.theme.buttonColor[props.color].text};
		background: ${props => props.theme.buttonColor[props.color].default};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.color].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor[props.color].disabled};
			color: ${props => props.theme.color.darkerGrey};
		}
	`,
	secondary: css<{color: typeof BUTTON_COLOR }>`
		color: ${props => props.theme.buttonColor[props.color].text};
		background: ${props => props.theme.color.transparent};
		border: 1px solid ${props => props.theme.buttonColor[props.color].default};
		${buttonBase};
		&:hover {
			color: ${props => props.theme.color.white};
			background: ${props => props.theme.buttonColor[props.color].hover};
			border-color: ${props => props.theme.buttonColor[props.color].hover};
		}
		&:disabled {
			cursor: not-allowed;
			border: none;
			background: ${props => props.theme.buttonColor[props.color].disabled};
			color: ${props => props.theme.color.darkerGrey};
		}
	`,
	ghost: css<{color: typeof BUTTON_COLOR }>`
		border: none;
		color: ${props => props.theme.buttonColor[props.color].text};
		background: ${props => props.theme.buttonColor[props.color].default};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.color].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor[props.color].disabled};
			color: ${props => props.theme.color.darkerGrey};
		}
	`,
};
