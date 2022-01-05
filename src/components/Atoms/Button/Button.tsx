import React from 'react';
import styled, { css } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Css definitions
import { TEXT_SIZE, transitionStyle } from '../../../theme/styles';

// Props
import {
	border, BorderProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	size, SizeProps,
} from '../../../theme/props';
import { FONT_SIZE } from '../../../theme/definitions';

const buttonCSS = {
	base: css`
        color: ${props => props.theme.color.white};
        background: ${props => props.theme.color.purple};
		padding: ${props => props.theme.space.s24} ${props => props.theme.space.s44};
		${TEXT_SIZE.button};
		&:hover {
			background: ${props => props.theme.color.darkerPurple};
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	white: css`
        color: ${props => props.theme.color.darkerPurple};
        background: ${props => props.theme.color.white};
		padding: ${props => props.theme.space.s24} ${props => props.theme.space.s32};
		${TEXT_SIZE.button};
		border: 1px solid white;
		&:hover {
			background: ${props => props.theme.color.purple};
			color: ${props => props.theme.color.white};
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	outline: css`
		color: ${props => props.theme.color.white};
		background: transparent;
		border: 1px solid ${props => props.theme.color.white};
		${TEXT_SIZE.button};
		padding: ${props => props.theme.space.s24} ${props => props.theme.space.s44};
		&:hover {
			background: ${props => props.theme.color.white};
			color: ${props => props.theme.color.blackLight};
		}
	`,
	outlineSmall: css`
		color: ${props => props.theme.color.white};
		background: transparent;
		border: 1px solid ${props => props.theme.color.white};
		${TEXT_SIZE.button};
		padding: ${props => props.theme.space.s24} ${props => props.theme.space.s32};
		&:hover {
			background: ${props => props.theme.color.white};
			color: ${props => props.theme.color.blackLight};
		}
	`,
	signUp: css`
		color: ${props => props.theme.color.white};
		background: ${props => props.theme.color.purple};
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s24};
		border: 1px solid ${props => props.theme.color.purple};
		font-size: ${props => props.theme.fontSize.s14};
		font-weight: bold;
		&:hover {
			background-color: ${props => props.theme.color.darkerPurple};
			color: ${props => props.theme.color.white} !important;
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	signIn: css`
		color: ${props => props.theme.color.white};
        background: none;
		border: 1px solid #ffffff;
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s24};
		font-size: ${props => props.theme.fontSize.s14};
		font-weight: bold;
		&:hover {
			background: ${props => props.theme.color.white};
			color: ${props => props.theme.color.black};
		}
		&:disabled {
			background: ${props => props.theme.color.darkerGrey};
		}
	`,
	tag: css`
		color: ${props => props.theme.color.white};
		background-color: transparent;
		padding: ${props => props.theme.space.s4} ${props => props.theme.space.s12};
		font-size: ${FONT_SIZE.s14};
        border-radius: 4px;
		border: 1px solid white;
		text-transform: none;
		font-weight: normal;
		
		&.active {
			color: ${props => props.theme.color.black};
			background-color: white;

		}
	`,
};

type ButtonAtomProps = {
    variant?: keyof typeof buttonCSS
} & TextProps & SpaceProps & ResponsiveProps & SizeProps & BorderProps;

export const ButtonBase = styled.button<ButtonAtomProps>`
	${transitionStyle};
	border-radius: 4px;
	font-weight: bold;
    display: inline-block;
    text-align: center;
    cursor: pointer;
	text-transform: uppercase;
	white-space: nowrap;
	${props => props.variant && buttonCSS[props.variant]};
    ${text};
    ${space};
    ${responsive};
	${size};
	${border};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & ButtonAtomProps;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

export const Button: ButtonComponent = (props) => {
	const { children, ...linkProps } = props;
	return <ButtonBase {...linkProps}>{children}</ButtonBase>;
};

Button.defaultProps = {
	variant: 'base',
};
