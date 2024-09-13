import { css } from 'styled-components';
import { Properties } from 'csstype';
import { GapDefinition } from '../../../theme/definitions/gap/gap';

export type FlexProps = {
	flex?: Properties['flex']
	direction?: Properties['flexDirection']
	alignItems?: Properties['alignItems']
	justifyContent?: Properties['justifyContent']
	flexBasis?: Properties['flexBasis']
	flexGrow?: Properties['flexGrow']
	flexShrink?: Properties['flexShrink']
	flexWrap?: Properties['flexWrap']
	wrap?: boolean
	gap?: GapDefinition
};

export const flex = css<FlexProps>`
	${props => props.flex && `flex: ${props.flex}`};
	${props => props.direction && `flex-direction: ${props.direction}`};
	${props => props.alignItems && `align-items: ${props.alignItems}`};
	${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.flexBasis && `flex-basis: ${props.flexBasis}`};
	${props => props.flexGrow && `flex-grow: ${props.flexGrow}`};
	${props => props.flexShrink && `flex-shrink: ${props.flexShrink}`};
	${props => props.flexWrap && `flex-wrap: ${props.flexWrap}`};
	${props => props.wrap && 'flex-wrap: wrap'};
	${({ gap }) => gap && css`gap: ${props => props.theme.gap[gap]};`};
`;
