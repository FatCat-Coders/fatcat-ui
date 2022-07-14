import { css } from 'styled-components';
import { Properties } from 'csstype';

export type SizeProps = {
	width?: Properties['width']
	maxWidth?: Properties['maxWidth']
	minWidth?: Properties['minWidth']
	height?: Properties['height']
	maxHeight?: Properties['maxHeight']
	minHeight?: Properties['minHeight']
}

export const size = css<SizeProps>`
	${props => props.width && `width: ${props.width};`}
	${props => props.maxWidth && `max-width: ${props.maxWidth};`}
	${props => props.minWidth && `min-width: ${props.minWidth};`}
	${props => props.height && `height: ${props.height};`}
	${props => props.maxHeight && `max-height: ${props.maxHeight};`}
	${props => props.minHeight && `min-height: ${props.minHeight};`}
`;
