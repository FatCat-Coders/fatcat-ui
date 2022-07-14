import { css } from 'styled-components';
import { Properties } from 'csstype';

export type TransitionsProps = {
	transition?: Properties['transition']
	transitionDelay?: Properties['transitionDelay']
	transitionDuration?: Properties['transitionDuration']
	transitionProperty?: Properties['transitionProperty']
	transitionTimingFunction?: Properties['transitionTimingFunction']
	willChange?: Properties['willChange']
};

export const transition = css<TransitionsProps>`
	${props => props.transition && `transition: ${props.transition};`}
	${props => props.transitionDelay && `transition-delay: ${props.transitionDelay};`}
	${props => props.transitionDuration && `transition-duration: ${props.transitionDuration};`}
	${props => props.transitionProperty && `transition-property: ${props.transitionProperty};`}
	${props => props.transitionTimingFunction && `transition-timing-function: ${props.transitionTimingFunction};`}
	${props => props.willChange && `will-change: ${props.willChange};`}
`;
