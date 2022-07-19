import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { PolymorphicComponent } from '../../utils/polymorphic-component';

// Theme
import {
	animation, AnimationProps,
	hover, HoverProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	position, PositionProps,
	visibility, VisibilityProps,
	transition, TransitionsProps,
} from '../../theme/props';

export type Tlink =
	{
		disabled?: boolean;
		withArrow?: boolean;
		variant?: keyof DefaultTheme['linkStyle'];
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;

export const LinkBase = styled('a')<Tlink>`
	cursor: pointer;
	${props => props.variant && props.theme.linkStyle[props.variant]};
	${animation};
	${position};
	${space};
	${text};
	${visibility};
	${transition}
	${hover};
	${responsive};
`;

const Arrow = styled.i`
	border-style: solid;
	border-color: inherit;
	border-width: 0 calc(1em * 0.1) calc(1em * 0.1) 0;
	display: inline-block;
	width: calc(1em/4);
	height: calc(1em/4);
	transform: rotate(-45deg) translateY(-33%);
	margin-left: 10px;
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & Tlink;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const {
		children, to, withArrow, ...linkProps
	} = props;
	return (
		<LinkBase href={to} to={props.as ? to : undefined} {...linkProps}>
			{children}
			{withArrow && <Arrow />}
		</LinkBase>
	);
};

Link.defaultProps = {
	variant: 'base',
	disabled: false,
	withArrow: false,
};
