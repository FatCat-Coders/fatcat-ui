import { css } from 'styled-components';
import { Properties } from 'csstype';

export type FlexProps = {
	alignItems?: Properties['alignItems'],
	justifyContent?: Properties['justifyContent'],
	wrap?: boolean, // Maybe use actual flex-wrap type to be able to set inherit
	flex?: Properties['flex'],
	direction?: Properties['flexDirection'],
	order?: number,
	flexBasis?: Properties['flexBasis'],
	gap?: Properties['gap'],
};

export const flex = css<FlexProps>`
	display: flex;
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.wrap && 'flex-wrap: wrap'};
	${props => props.flex && `flex: ${props.flex}`};
	${props => props.direction && `flex-direction: ${props.direction}`};
	${props => props.order && `order: ${props.order}`};
	${props => props.flexBasis && `flex-basis: ${props.flexBasis}`};
	${props => props.gap && `gap: ${props.gap}`};
`;
