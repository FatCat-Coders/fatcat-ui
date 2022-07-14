import React from 'react';
import { styled } from '../../utils/styled';
import { DefaultTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../utils/polymorphic-component';

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
} from '../../theme/props';

export type TButton =
	{
		variant?: keyof DefaultTheme['buttonStyle'],
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
	${props => props.variant && props.theme.buttonStyle[props.variant]};
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
	return <ButtonBase {...linkProps}>{children}</ButtonBase>;
};

Button.defaultProps = {
	variant: 'base',
};
