import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TTextAreaField = {
	variant?: keyof DefaultTheme['inputStyle']
} & GeneralProps;

export const TextAreaField = styled('textarea') <TTextAreaField>`
	resize: none;
	${props => props.variant && props.theme.inputStyle[props.variant]};
	${generalProps};
`;

TextAreaField.defaultProps = {
	variant: 'base',
};
