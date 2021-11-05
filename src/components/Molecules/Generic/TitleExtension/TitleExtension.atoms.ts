import styled from 'styled-components';
import { MEDIA } from '../../../../theme/definitions';

export const TitleExtension = styled.span`
	background-color: ${props => props.theme.color.yellow};
	padding: ${props => props.theme.space.s4} ${props => props.theme.space.s12};
	font-size: ${props => props.theme.fontSize.s32};
	color: ${props => props.theme.color.black};
	width: fit-content;
	font-weight: bold;
	transform: rotate(-6deg) translate(10%, -15%);
	float: right;
	margin-top: ${props => props.theme.space.s12} ${MEDIA.mobile} {
		font-size: ${props => props.theme.fontSize.s24};
}`;
