import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../utils/polymorphic-component';

// Css definitions
import { transitionStyle } from '../../theme/styles';

// Props
import {
	border, BorderProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	hover, HoverProps,
} from '../../theme/props';

export type TButton =
	{
		variant?: keyof DefaultTheme['buttonStyle'],
	}
	& BorderProps
	& HoverProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps;

export const ButtonBase = styled.button<TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
    text-align: center;
	text-transform: uppercase;
	white-space: nowrap;
	${props => props.variant && props.theme.buttonStyle[props.variant]};
	${border};
	${size};
    ${space};
    ${text};
	${transitionStyle};
	${hover}
    ${responsive};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & TButton;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

export const Button: ButtonComponent = (props) => {
	const { children, ...linkProps } = props;
	return <ButtonBase {...linkProps}>{children}</ButtonBase>;
};

Button.defaultProps = {
	variant: 'base',
};
