import { css } from 'styled-components';
import { Properties } from 'csstype';

export type SizeProps = {
	w?: Properties['width']
	maxW?: Properties['maxWidth']
	minW?: Properties['minWidth']
	h?: Properties['height']
	maxH?: Properties['maxHeight']
	minH?: Properties['minHeight']
}

export const size = css<SizeProps>`
	${props => props.w && `width: ${props.w};`}
	${props => props.maxW && `max-width: ${props.maxW};`}
	${props => props.minW && `min-width: ${props.minW};`}
	${props => props.h && `height: ${props.h};`}
	${props => props.maxH && `max-height: ${props.maxH};`}
	${props => props.minH && `min-height: ${props.minH};`}
`;
