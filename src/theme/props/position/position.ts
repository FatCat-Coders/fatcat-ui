import { css } from 'styled-components';
import { Properties } from 'csstype';

export type PositionProps = {
	position?: Properties['position']
	top?: Properties['top']
	right?: Properties['right']
	bottom?: Properties['bottom']
	left?: Properties['left']
	inset?: Properties['inset']
	zIndex?: Properties['zIndex']
	transform?: Properties['transform']
	transformOrigin?: Properties['transformOrigin']
	perspective?: Properties['perspective']
	perspectiveOrigin?: Properties['perspectiveOrigin']
	alignSelf?: Properties['alignSelf']
	order?: number
};

export const position = css<PositionProps>`
	${props => props.position && `position: ${props.position}`};
	${props => props.top && `top: ${props.top}`};
	${props => props.right && `right: ${props.right}`};
	${props => props.bottom && `bottom: ${props.bottom}`};
	${props => props.left && `left: ${props.left}`};
	${props => props.inset && `inset: ${props.inset}`};
	${props => props.zIndex && `z-index: ${props.zIndex}`};
	${props => props.transform && `transform: ${props.transform}`};
	${props => props.transformOrigin && `transform-origin: ${props.transformOrigin}`};
	${props => props.perspective && `perspective: ${props.perspective}`};
	${props => props.perspectiveOrigin && `perspective-origin: ${props.perspectiveOrigin}`};
	${props => props.alignSelf && `align-self: ${props.alignSelf}`};
	${props => props.order && `order: ${props.order}`};
`;
