import styled from 'styled-components';

import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	hover, HoverProps,
	opacity, OpacityProps,
	overflow, OverflowProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TWrapper =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& OpacityProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;

export const Wrapper = styled.div<TWrapper>`
	width: 100%;
	${animation}
	${background};
	${border};
	${opacity};
	${overflow};
	${position};
	${responsive};
	${size};
	${space};
	${text};
	${transition}
	${visibility};
	${hover};
	${responsive};
`;

Wrapper.defaultProps = {
	$initialDisplay: 'block',
};
