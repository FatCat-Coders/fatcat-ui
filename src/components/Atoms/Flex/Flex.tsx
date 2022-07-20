import { styled } from '../../../utils/styled';

import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	flex, FlexProps,
	hover, HoverProps,
	overflow, OverflowProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TFlex =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& FlexProps
	& HoverProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TransitionsProps
	& VisibilityProps;

export const Flex = styled('div')<TFlex>`
	width: 100%;
	${animation};
	${background};
	${border};
	${flex};
	${hover};
	${overflow};
	${position};
	${size};
	${space};
	${transition}
	${visibility};
	${hover};
	${responsive};
`;

Flex.defaultProps = {
	initialDisplay: 'flex',
};
