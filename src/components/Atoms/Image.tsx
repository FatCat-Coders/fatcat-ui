import styled from 'styled-components';

import {
	border, BorderProps,
	hover, HoverProps,
	opacity, OpacityProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps, text,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TImage =
	{
		inline?: boolean
	}
	& BorderProps
	& HoverProps
	& OpacityProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& VisibilityProps;

export const Image = styled.img<TImage>`
	display: ${props => (props.inline ? 'inline-block' : 'block')};
	align-self: center;
	width: 100%;
	${border};
	${opacity};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${hover}
	${responsive};
`;

Image.defaultProps = {
	initialDisplay: 'block',
};
