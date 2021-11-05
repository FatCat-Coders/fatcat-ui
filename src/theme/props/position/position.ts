import { css } from 'styled-components';
import { Properties } from 'csstype';

export type PositionProps = {
	position?: Properties['position'];
	top?: Properties['top'];
	left?: Properties['left'];
	bottom?: Properties['bottom'];
	right?: Properties['right'];
	zIndex?: Properties['zIndex'];
	transform?: Properties['transform']
};

export const position = css<PositionProps>`
	${props => props.position && `position: ${props.position};`}
	${props => props.top && `top: ${props.top};`}
	${props => props.left && `left: ${props.left};`}
	${props => props.bottom && `bottom: ${props.bottom};`}
	${props => props.right && `right: ${props.right};`}
	${props => props.zIndex && `z-index: ${props.zIndex};`}
	${props => props.transform && `transform: ${props.transform}`}
`;
