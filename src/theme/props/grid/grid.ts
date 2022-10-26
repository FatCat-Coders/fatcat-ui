import { css } from 'styled-components';
import { Properties } from 'csstype';

export type GridProps = {
		gap?: Properties['gap']
		rowGap?: Properties['rowGap']
		grid?: Properties['grid']
		gridTemplateAreas?: Properties['gridTemplateAreas']
		gridTemplateColumns: Properties['gridTemplateColumns']
		gridTemplateRows?: Properties['gridTemplateRows']
		gridAutoColumns?: Properties['gridAutoColumns']
		gridAutoFlow?: Properties['gridAutoFlow']
		gridAutoRows?: Properties['gridAutoRows']
		alignItems?: Properties['alignItems']
		justifyContent?: Properties['justifyContent']
		justifyItems?: Properties['justifyItems']
};

export const grid = css<Partial<GridProps>>`
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
	${props => props.gridTemplateColumns && `grid-template-columns: ${props.gridTemplateColumns}`};
	${props => props.grid && `grid: ${props.grid}`};
	${props => props.gridAutoColumns && `grid-auto-columns: ${props.gridAutoColumns}`};
	${props => props.gridAutoFlow && `grid-auto-flow: ${props.gridAutoFlow}`};
	${props => props.gridAutoRows && `grid-auto-rows: ${props.gridAutoRows}`};
	${props => props.gridTemplateAreas && `grid-template-areas: ${props.gridTemplateAreas}`};
	${props => props.gridTemplateRows && `grid-template-rows: ${props.gridTemplateRows}`};
	gap: ${props => props.gap || '16px'};
	${props => props.rowGap && `row-gap: ${props.rowGap}`};
`;
