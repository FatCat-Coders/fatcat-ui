import styled from 'styled-components';
import { Properties } from 'csstype';

import { MEDIA } from '../../../theme/definitions';

import {
	background, BackgroundProps,
	border, BorderProps,
	height, HeightProps,
	space, SpaceProps,
	width, WidthProps,
	responsive, ResponsiveProps,
} from '../../../theme/props';

export type GridAtomProps = WidthProps & HeightProps & BackgroundProps & BorderProps & SpaceProps & ResponsiveProps & {
	gap?: Properties['gap'],
	rowGap?: Properties['rowGap'],
	gridTemplateColumns: Properties['gridTemplateColumns'],
	alignItems?: Properties['alignItems'],
	justifyContent?: Properties['justifyContent'],
	justifyItems?: Properties['justifyItems'],
};

export const Grid = styled.div<GridAtomProps>`
	${space};
	${border};
	${background};
	${height};
	${width};
	${responsive};
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
	${props => props.gridTemplateColumns && `grid-template-columns: ${props.gridTemplateColumns}`};
	gap: ${props => props.gap || '16px'};
	${props => props.rowGap && `row-gap: ${props.rowGap}`};
	display: grid;
	width: 100%;

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
