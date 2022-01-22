import styled from 'styled-components';
import { visibility, VisibilityProps } from '../../theme/props';

export const DottedDivider = styled.hr`
	border: none;
	width: 100%;
	height: 2px;
	margin: 0;
	background-image: linear-gradient(to right, #000000 10%, rgba(255, 255, 255, 0) 0%);
	background-position: top;
	background-size: 10px 1px;
	background-repeat: repeat-x;
`;

export const BR = styled.br<VisibilityProps>`
	${visibility};
`;

BR.defaultProps = {
	$initialDisplay: 'inline',
};
