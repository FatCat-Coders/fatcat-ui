import { css } from 'styled-components';
import { Properties } from 'csstype';

export type OverflowProps = {
    $overflow?: Properties['overflow']
	$overflowY?: Properties['overflowY']
	$overflowX?: Properties['overflowX']
};

export const overflow = css<OverflowProps>`
	${props => props.$overflow && `overflow: ${props.$overflow}`};
	${props => props.$overflowY && `overflow-y: ${props.$overflowY}`};
	${props => props.$overflowX && `overflow-X: ${props.$overflowX}`};
`;
