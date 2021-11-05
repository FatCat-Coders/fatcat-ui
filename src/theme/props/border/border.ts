import { css } from 'styled-components';
import { Properties } from 'csstype';

export type BorderProps = {
	borderRadius?: Properties['borderRadius'],
	border?: Properties['border'],
	borderLeft?: Properties['borderLeft'],
	borderRight?: Properties['borderRight'],
	borderTop?: Properties['borderTop'],
	borderBottom?: Properties['borderBottom']
	boxShadow?: Properties['boxShadow'],
};

export const border = css<BorderProps>`
	${props => props.borderRadius && `border-radius: ${props.borderRadius};`};
	${props => props.border && `border: ${props.border};`}
	${props => props.borderLeft && `border-left: ${props.borderLeft};`}
	${props => props.borderRight && `border-right: ${props.borderRight};`}
	${props => props.borderTop && `border-top: ${props.borderTop};`}
	${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
	${props => props.boxShadow && `box-shadow: ${props.boxShadow}`};
`;
