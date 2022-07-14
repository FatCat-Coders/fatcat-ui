import { styled } from '../../utils/styled';
import { Properties } from 'csstype';

import { MEDIA } from '../../theme/definitions';

import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	visibility, VisibilityProps,
	hover, HoverProps,
} from '../../theme/props';

export type TGrid =
	{
		gap?: Properties['gap'],
		rowGap?: Properties['rowGap'],
		gridTemplateColumns: Properties['gridTemplateColumns'],
		alignItems?: Properties['alignItems'],
		justifyContent?: Properties['justifyContent'],
		justifyItems?: Properties['justifyItems'],
	}
	& AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& VisibilityProps;

export const Grid = styled('div')<TGrid>`
	display: grid;
	width: 100%;
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
	${props => props.gridTemplateColumns && `grid-template-columns: ${props.gridTemplateColumns}`};
	gap: ${props => props.gap || '16px'};
	${props => props.rowGap && `row-gap: ${props.rowGap}`};

	${animation};
	${background};
	${border};
	${position};
	${size};
	${space};
	${visibility};
	${hover}
	${responsive};

	${MEDIA.ie} {
		display: flex;
		flex-wrap: wrap;
		margin-right: -${props => props.gap || '16px'};
		margin-bottom: -${props => props.gap || '16px'};
		> * {
			margin-right: ${props => props.gap || '16px'};
			margin-bottom: ${props => props.gap || '16px'};
		}
	}
`;
