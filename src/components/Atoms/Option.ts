import { styled } from '../../utils/styled';

import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TOption =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Option = styled('option')<TOption>`
	${animation};
	${position};
	${visibility};
    ${background};
    ${border};
    ${size};
    ${space};
    ${text};
	${hover}
    ${responsive};
`;
