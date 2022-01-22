import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../utils/polymorphic-component';

// Css definitions
import { transitionStyle } from '../../theme/styles';

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
	visibility, VisibilityProps,
} from '../../theme/props';

export type TButton =
	{
		$variant?: keyof DefaultTheme['buttonStyle'],
	}
	& AnimationProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const ButtonBase = styled.button<TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
    text-align: center;
	white-space: nowrap;
	${props => props.$variant && props.theme.buttonStyle[props.$variant]};
	${animation};
	${border};
	${position};
	${size};
	${visibility};
    ${space};
    ${text};
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
	$variant: 'base',
};
