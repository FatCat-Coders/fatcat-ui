import { css, DefaultTheme } from 'styled-components';

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

const buttonBase = css<{size: keyof DefaultTheme['buttonSize']}>`
	${props => props.size && props.theme.buttonSize[props.size]};
	${props => props.theme.textVariant.button};
	height: fit-content;
	border-radius: 4px;
`;

export const BUTTON_VARIANT = {
	primary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	secondary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			color: ${props => props.theme.color.white};
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.text};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	ghost: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	underline: css<{ buttonColor: keyof DefaultTheme['buttonColor'] }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		position: relative;
		padding: 0;
		${props => props.theme.textVariant.button};

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 1px;
			background-color: ${props => props.theme.buttonColor[props.buttonColor].default};
		}
		&:hover {
			&::before {
				width: 100%;
			}
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
			&::before {
				width: 100%;
				background-color: ${props => props.theme.buttonColor.disabled.text};
			}
		}
	`,
	noStyle: css``,
};
