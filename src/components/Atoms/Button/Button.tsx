import React from 'react';
import { styled } from '../../../utils/styled';
import { DefaultTheme, useTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Props
import {
	animation, AnimationProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TButton =
	{
		color?: keyof DefaultTheme['buttonColor'] | undefined
		size?: keyof DefaultTheme['buttonSize']
		variant?: keyof DefaultTheme['buttonVariant']
	}
	& AnimationProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;

export const ButtonBase = styled('button')<TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
    text-align: center;
	white-space: nowrap;
	${props => props.variant && props.theme.buttonVariant[props.variant]};
	${animation};
	${border};
	${position};
	${size};
	${visibility};
    ${space};
    ${text};
	${transition}
	${hover}
    ${responsive};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & TButton;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

export const Button: ButtonComponent = (props) => {
	const { children, ...linkProps } = props;
	const theme = useTheme();
	const color = (!linkProps.color && theme.buttonColor[linkProps.variant]) ? linkProps.variant : 'primary';
	return <ButtonBase {...linkProps} color={color}>{children}</ButtonBase>;
};

Button.defaultProps = {
	color: undefined,
	size: 'large',
	variant: 'primary',
};
