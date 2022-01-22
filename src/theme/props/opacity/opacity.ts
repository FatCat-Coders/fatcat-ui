import { css } from 'styled-components';
import { Properties } from 'csstype';

export type OpacityProps = {
    $opacity?: Properties['opacity']
};

export const opacity = css<OpacityProps>`
	${props => props.$opacity && `opacity: ${props.$opacity}`};

`;
