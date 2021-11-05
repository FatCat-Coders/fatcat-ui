import { css } from 'styled-components';

export type HeightProps = {
	height?: string,
	maxHeight?: string,
	minHeight?: string,
}

export const height = css<HeightProps>`
	${props => props.height && `height: ${props.height};`}
	${props => props.maxHeight && `max-height: ${props.maxHeight};`}
	${props => props.minHeight && `min-height: ${props.minHeight};`}
`;
