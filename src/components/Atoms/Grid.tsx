import styled from 'styled-components';
import { Properties } from 'csstype';

import { MEDIA } from '../../theme/definitions';

import {
	background, BackgroundProps,
	border, BorderProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
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
	& BackgroundProps
	& BorderProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps;

export const Grid = styled.div<TGrid>`
	display: grid;
	width: 100%;
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
	${props => props.gridTemplateColumns && `grid-template-columns: ${props.gridTemplateColumns}`};
	gap: ${props => props.gap || '16px'};
	${props => props.rowGap && `row-gap: ${props.rowGap}`};

	${background};
	${border};
	${size};
	${space};
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
