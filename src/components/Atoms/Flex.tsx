import styled from 'styled-components';

// Types
import { PolymorphicComponent } from '../../utils/polymorphic-component';

import {
	background, BackgroundProps,
	border, BorderProps,
	flex, FlexProps,
	hover, HoverProps,
	opacity, OpacityProps,
	overflow, OverflowProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	visibility, VisibilityProps,
} from '../../theme/props';

import React from 'react';

export type TFlex =
	BackgroundProps
	& BorderProps
	& FlexProps
	& HoverProps
	& OpacityProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& VisibilityProps;

export const FlexBase = styled.div<TFlex>`
	width: 100%;
	${background};
	${border};
	${flex};
	${hover};
	${opacity};
	${overflow};
	${position};
	${size};
	${space};
	${visibility};
	${hover};
	${responsive};
`;

export type FlexComponentProps = Omit<JSX.IntrinsicElements['div'], 'type'> & TFlex;
export type FlexComponent = PolymorphicComponent<FlexComponentProps>;

export const Flex: FlexComponent = (props) => {
	const { children, ...flexProps } = props;
	return <FlexBase {...flexProps}>{children}</FlexBase>;
};

Flex.defaultProps = {
	initialDisplay: 'flex',
};
