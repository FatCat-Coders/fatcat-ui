import { css } from 'styled-components';
import { Properties } from 'csstype';

export type FlexProps = {
	$flex?: Properties['flex']
	$direction?: Properties['flexDirection']
	$alignItems?: Properties['alignItems']
	$justifyContent?: Properties['justifyContent']
	$flexBasis?: Properties['flexBasis']
	$wrap?: boolean // Maybe use actual flex-wrap type to be able to set inherit
	$gap?: Properties['gap']
	$order?: number
};

export const flex = css<FlexProps>`
	display: flex;
	${props => props.$flex && `flex: ${props.$flex}`};
	${props => props.$direction && `flex-direction: ${props.$direction}`};
	${props => props.$alignItems && `align-items: ${props.$alignItems}`};
	${props => props.$justifyContent && `justify-content: ${props.$justifyContent}`};
	${props => props.$flexBasis && `flex-basis: ${props.$flexBasis}`};
	${props => props.$wrap && 'flex-wrap: wrap'};
	${props => props.$gap && `gap: ${props.$gap}`};
	${props => props.$order && `order: ${props.$order}`};
`;
