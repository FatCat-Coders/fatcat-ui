import styled from 'styled-components';

// Types
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

import {
	flex, FlexProps,
	space, SpaceProps,
	width, WidthProps,
	height, HeightProps,
	background, BackgroundProps,
	border, BorderProps,
	position, PositionProps,
	visibility, VisibilityProps,
	responsive, ResponsiveProps,
	overflow, OverflowProps,
	opacity, OpacityProps,
	hover, HoverProps,
} from '../../../theme/props';

import React from 'react';

export type FlexAtomProps =
	FlexProps
	& SpaceProps
	& WidthProps
	& HeightProps
	& BackgroundProps
	& BorderProps
	& PositionProps
	& VisibilityProps
	& HoverProps
	& OverflowProps
	& OpacityProps
	& ResponsiveProps;

export const FlexBase = styled.div<FlexAtomProps>`
	width: 100%;
	${flex};
	${space};
	${width};
	${height};
	${background};
	${border};
	${position};
	${visibility};
	${responsive};
	${hover};
	${overflow};
	${opacity};
	${hover};
`;

export type FlexComponentProps = Omit<JSX.IntrinsicElements['div'], 'type'> & FlexAtomProps;
export type FlexComponent = PolymorphicComponent<FlexComponentProps>;

export const Flex: FlexComponent = (props) => {
	const { children, ...flexProps } = props;
	return <FlexBase {...flexProps}>{children}</FlexBase>;
};

Flex.defaultProps = {
	initialDisplay: 'flex',
};
