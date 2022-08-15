import React from 'react';
import { styled } from '../../../utils/styled';
import { DefaultTheme, useTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TButton = {
	buttonColor?: keyof DefaultTheme['buttonColor'] | undefined
	size?: keyof DefaultTheme['buttonSize']
	variant?: keyof DefaultTheme['buttonVariant']
} & GeneralProps;

export const ButtonBase = styled('button') <TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
    text-align: center;
	white-space: nowrap;
	${props => props.variant && props.theme.buttonVariant[props.variant]};
	${generalProps};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & TButton;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

export const Button: ButtonComponent = (props) => {
	const { children, ...linkProps } = props;
	const theme = useTheme();
	const color = (!linkProps.buttonColor && theme.buttonColor[linkProps.variant]) ? linkProps.variant : linkProps.buttonColor;
	return <ButtonBase {...linkProps} buttonColor={color}>{children}</ButtonBase>;
};

Button.defaultProps = {
	buttonColor: undefined,
	size: 'large',
	variant: 'primary',
};
