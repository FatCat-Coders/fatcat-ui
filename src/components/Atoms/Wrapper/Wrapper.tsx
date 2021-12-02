import styled from 'styled-components';

import {
	background, BackgroundProps,
	border, BorderProps,
	size, SizeProps,
	space, SpaceProps,
	position, PositionProps,
	visibility, VisibilityProps,
	responsive, ResponsiveProps,
	overflow, OverflowProps,
	text, TextProps,
	opacity, OpacityProps,
} from '../../../theme/props';
import { hover, HoverProps } from '../../../theme/props/hover/hover';

export type WrapperAtomProps =
	SizeProps
	& SpaceProps
	& BackgroundProps
	& BorderProps
	& PositionProps
	& VisibilityProps
	& ResponsiveProps
	& OverflowProps
	& HoverProps
	& TextProps
	& OpacityProps;

export const Wrapper = styled.div<WrapperAtomProps>`
	width: 100%;
	${text};
	${size};
	${space};
	${background};
	${border};
	${position};
	${visibility};
	${responsive};
	${overflow};
	${responsive};
	${hover};
	${opacity};
`;

Wrapper.defaultProps = {
	initialDisplay: 'block',
};
