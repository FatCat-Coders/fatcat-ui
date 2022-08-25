import styled, { keyframes, css } from 'styled-components';
import { generalProps, GeneralProps } from '../../../theme/props';

import { Flex } from '../../Atoms/Flex';

const starPop = keyframes`
	0% {
		transform: scale(1.1);
		opacity: 1;
	}
	45% {
		transform: scale(0.9);
		opacity: 0.65;
	}
	90% {
		transform: scale(1.2);
		opacity: 0.3;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

export const RatingItem = styled(Flex)`
	align-items: center;
	${props => props.pop && css`
		transition: all 0.1s ease-in-out;
		animation: ${starPop} 0.5s ease-in-out forwards;
	`}

	${props => props.backgroundGradient && css`
		position: relative;
		background: unset;
		&::before{
			content: '';
			position: absolute;
			z-index: 0;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: calc(100% - 1px);
			height: calc(100% - 1px);
			background: ${props.backgroundGradient};
		}
	`}
`;

export const Star = styled.svg<GeneralProps>`
	${generalProps}
`;
