import { styled } from '../../../utils/styled';

import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	grid, GridProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TGrid =
	& AnimationProps
	& BackgroundProps
	& BorderProps
	& GridProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& VisibilityProps;

export const Grid = styled('div')<TGrid>`
	width: 100%;
	${animation};
	${background};
	${border};
	${grid}
	${position};
	${size};
	${space};
	${visibility};
	${hover}
	${responsive};
`;
