import styled, {
	css,
	DefaultTheme,
	CSSProp,
} from 'styled-components';
import { darken } from 'polished';

export type TCheckboxStyle = {
	checked: boolean
	backgroundColor?: keyof DefaultTheme['color']
	size: 'small' | 'medium' | 'large'
}

export const sizing = {
	small: '12px',
	medium: '16px',
	large: '20px',
};

export const CheckIcon = styled.svg`
`;

export const CheckboxWrapper = styled.span<TCheckboxStyle>`
	/* position: relative; */
	display: flex;
	border: 1px solid ${({ backgroundColor, theme }) => (backgroundColor ? theme.color[backgroundColor] : theme.color.primary)};
	padding: ${({ size }) => (size === 'small' ? '2px' : '3px')};
	align-items: center;
	justify-content: center;
	background-color: transparent;
	width: ${({ size }) => sizing[size]};
	height: ${({ size }) => sizing[size]};
	border-radius: 3px;
	transition: border 0.2s ease-in-out;
	svg {
		visibility: hidden;
	}
	${({ checked, backgroundColor, theme }) => checked && css`
		background-color: ${(backgroundColor ? theme.color[backgroundColor] : theme.color.primary)};
		svg {
			visibility: visible;
		}
	`}
	&:hover {
		border: 1px solid ${({ backgroundColor, theme }) => (backgroundColor ? darken(0.1, theme.color[backgroundColor]) : darken(0.1, theme.color.primary))};
	}
`;

export const CheckboxInput = styled.input`
	opacity: 0;
	position: absolute;
	width: 0;
	height: 0;
	/* &:focus ~ ${CheckboxWrapper}::after {
		content: '';
		position: absolute;
		pointer-events: none;
		top: -3px;
		left: -3px;
		width: calc(100% + 6px);
		height: calc(100% + 6px);
		border: 1px solid red;
	} */
`;

export const CheckboxContainer = styled.label<{ css?: CSSProp, disabled?: boolean }>`
	cursor: pointer;
	height: fit-content;
	display: flex;
	align-items: center;
	gap: 8px;
	${({ disabled }) => disabled && css`
		cursor: not-allowed;
		${CheckboxWrapper} {
			opacity: 0.5;
		}
	`}
	${props => props.css}
`;
