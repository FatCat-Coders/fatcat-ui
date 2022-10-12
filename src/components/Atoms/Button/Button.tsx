import React from 'react';
import { UIprops } from '../../../utils/ui-props';
import styled, { DefaultTheme, useTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TButton = {
	buttonColor?: keyof DefaultTheme['buttonColor'] | undefined
	size?: keyof DefaultTheme['buttonSize']
	variant?: keyof DefaultTheme['buttonVariant']
} & GeneralProps;

export const ButtonBase = styled('button').withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
	${props => props.variant && props.theme.buttonVariant[props.variant]};
	${generalProps};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & TButton;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

export const Button: ButtonComponent = (props) => {
	const { children, buttonColor, ...buttonProps } = props;
	const theme = useTheme();
	const color = (!buttonColor && theme.buttonColor[buttonProps.variant]) ? buttonProps.variant : buttonColor;
	return <ButtonBase {...buttonProps} buttonColor={color}>{children}</ButtonBase>;
};

Button.defaultProps = {
	buttonColor: undefined,
	initialDisplay: 'inline-block',
	size: 'large',
	textAlign: 'center',
	variant: 'primary',
	whiteSpace: 'nowrap',
};
