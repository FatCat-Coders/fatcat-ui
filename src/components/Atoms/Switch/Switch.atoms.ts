import styled, { css, DefaultTheme, CSSProp } from 'styled-components';

export type TSwitchStyle = {
	checked: boolean
	disabled: boolean
	backgroundColor?: keyof DefaultTheme['color']
	useSameBackgroundColor?: boolean
}

export const Switch = styled.span`
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: white;
	transition: transform 0.2s ease-in-out;
	will-change: transform;
`;

export const SwitchWrapper = styled.span<TSwitchStyle>`
	cursor: pointer;
	display: flex;
	border: 2px solid transparent;
	background-color: ${props => (props.backgroundColor ? props.theme.color[props.backgroundColor] : props.theme.color.primary)};
	width: 36px;
	height: 20px;
	border-radius: 36px;
	${({ checked }) => checked && css`
		${Switch} {
			transform: translateX(100%);
		}
	`}
	${({ checked, useSameBackgroundColor }) => (!useSameBackgroundColor && !checked) && css`
		background-color: grey;
	`}
	${({ disabled }) => disabled && css`
		cursor: not-allowed;
		opacity: 0.5;
	`}
`;

export const SwitchInput = styled.input`
	opacity: 0;
	position: absolute;
	width: 0;
	height: 0;
`;

export const SwitchContainer = styled.label<{ css?: CSSProp }>`
	display: flex;
	align-items: center;
	gap: 8px;
	${props => props.css}
`;
