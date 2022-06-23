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
		$variant?: keyof DefaultTheme['linkStyle']
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;

export const LinkBase = styled.a<Tlink>`
	cursor: pointer;
	${props => props.$variant && props.theme.linkStyle[props.$variant]};
	${animation};
	${position};
	${space};
	${text};
	${visibility};
	${transition}
	${hover};
	${responsive};
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & Tlink;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const { children, to, ...linkProps } = props;
	return <LinkBase href={to} to={props.as ? to : undefined} {...linkProps}>{children}</LinkBase>; // eslint-disable-line
};

Link.defaultProps = {
	$variant: 'base',
};
