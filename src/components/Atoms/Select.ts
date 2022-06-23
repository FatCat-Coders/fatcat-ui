import styled from 'styled-components';

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

export type TSelect =
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

export const Select = styled.select<TSelect>`
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
	${animation};
	${position};
	${space};
	${visibility};
    ${background};
    ${border};
    ${size};
    ${text};
	${hover};
	${responsive};
`;
