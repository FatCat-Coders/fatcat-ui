import styled from 'styled-components';

import {
	animation, AnimationProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps, text,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TImage =
	{
		$inline?: boolean
	}
	& AnimationProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TransitionsProps
	& VisibilityProps;

export const Image = styled.img<TImage>`
	display: ${props => (props.$inline ? 'inline-block' : 'block')};
	align-self: center;
	width: 100%;
	${animation};
	${border};
	${position};
	${size};
	${space};
	${text};
	${transition}
	${visibility};
	${hover}
	${responsive};
`;

Image.defaultProps = {
	$initialDisplay: 'block',
};
