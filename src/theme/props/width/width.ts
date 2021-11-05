import { css } from 'styled-components';
import { Properties } from 'csstype';

export type WidthProps = {
	width?: Properties['width'],
	maxWidth?: Properties['maxWidth'],
	minWidth?: Properties['minWidth'],
}

export const width = css<WidthProps>`
	${props => props.width && `width: ${props.width};`}
	${props => props.maxWidth && `max-width: ${props.maxWidth};`}
	${props => props.minWidth && `min-width: ${props.minWidth};`}
`;
