import { css } from 'styled-components';
import { Properties } from 'csstype';

export type BorderProps = {
	border?: Properties['border']
	borderStyle?: Properties['borderStyle']
	borderColor?: Properties['borderColor']
	borderWidth?: Properties['borderWidth']
	borderTop?: Properties['borderTop']
	borderRight?: Properties['borderRight']
	borderBottom?: Properties['borderBottom']
	borderLeft?: Properties['borderLeft']
	borderRadius?: Properties['borderRadius']
	boxShadow?: Properties['boxShadow']
};

export const border = css<BorderProps>`
	${props => props.border && `border: ${props.border};`}
	${props => props.borderColor && `border-color: ${props.borderColor};`}
	${props => props.borderStyle && `border-style: ${props.borderStyle};`}
	${props => props.borderWidth && `border-width: ${props.borderWidth};`}
	${props => props.borderTop && `border-top: ${props.borderTop};`}
	${props => props.borderRight && `border-right: ${props.borderRight};`}
	${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
	${props => props.borderLeft && `border-left: ${props.borderLeft};`}
	${props => props.borderRadius && `border-radius: ${props.borderRadius};`};
	${props => props.boxShadow && `box-shadow: ${props.boxShadow}`};
`;
