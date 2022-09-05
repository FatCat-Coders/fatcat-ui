import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { visibility, VisibilityProps } from '../../../theme/props';

export const DottedDivider = styled.hr<{ color?: string }>`
	border: none;
	width: 100%;
	height: 2px;
	margin: 0;
	background-color: transparent;
	background-image: ${props => `linear-gradient(to right, ${props.color ? props.theme.color[props.color] : '#000000'} 10%, rgba(255, 255, 255, 0) 0%)`};
	background-position: top;
	background-size: 10px 1px;
	background-repeat: repeat-x;
`;

export const DashedDivider = styled.hr<{ color?: string }>`
	border: none;
	width: 100%;
	height: 2px;
	margin: 0;
	background-color: transparent;
	background-image: ${props => `linear-gradient(to right, ${props.color ? props.theme.color[props.color] : '#000000'} 40%, rgba(255, 255, 255, 0) 0%)`};
	background-position: top;
	background-size: 10px 1px;
	background-repeat: repeat-x;
`;

export const BR = styled.br.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
})<VisibilityProps>`
	${visibility};
`;

BR.defaultProps = {
	initialDisplay: 'inline',
};
