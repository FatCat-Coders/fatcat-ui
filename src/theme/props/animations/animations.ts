import { css } from 'styled-components';
import { Properties } from 'csstype';
import { AnimationDefinition, ANIMATIONS } from '../../definitions';

export type AnimationsProps = {
	animation?: [AnimationDefinition, Properties['animation']],
	animationName?: AnimationDefinition,
	animationDuration?: Properties['animationDuration'],
	animationTimingFunction?: Properties['animationTimingFunction'],
	animationDelay?: Properties['animationDelay'],
	animationIterationCount?: Properties['animationIterationCount'],
	animationDirection?: Properties['animationDirection'],
	animationFillMode?: Properties['animationFillMode'],
	animationPlayState?: Properties['animationPlayState'],
};

export const animations = css<AnimationsProps>`
	${props => props.animation && props.animation.length === 2 && `animation: ${ANIMATIONS[props.animation[0]]} ${props.animation[1]};`}
	${props => props.animationName && `animation-name: ${ANIMATIONS[props.animationName]};`}
	${props => props.animationDuration && `animation-duration: ${props.animationDuration};`}
	${props => props.animationTimingFunction && `animation-timing-function: ${props.animationTimingFunction};`}
	${props => props.animationDelay && `animation-delay: ${props.animationDelay};`}
	${props => props.animationIterationCount && `animation-iteration-count: ${props.animationIterationCount};`}
	${props => props.animationDirection && `animation-direction: ${props.animationDirection};`}
	${props => props.animationFillMode && `animation-fill-mode: ${props.animationFillMode};`}
	${props => props.animationPlayState && `animation-play-state: ${props.animationPlayState};`}
`;
