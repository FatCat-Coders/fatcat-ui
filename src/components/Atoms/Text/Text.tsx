import { styled } from '../../../utils/styled';

import {
	animation, AnimationProps,
	border, BorderProps,
	background, BackgroundProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TText =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;

export const Text = styled('span')<TText>`
	${props => props.theme.textStyle.text}
	${animation};
	${background};
	${border};
	${position};
	${size};
	${space};
	${text};
	${transition}
	${visibility};
	${hover};
	${responsive};
`;
