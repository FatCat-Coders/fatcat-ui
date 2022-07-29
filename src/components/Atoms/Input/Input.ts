import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TInput = {
	variant?: keyof DefaultTheme['inputStyle']
} & GeneralProps;

export const InputField = styled('input') <TInput>`
	${props => props.variant && props.theme.inputStyle[props.variant]};
	${generalProps};
`;

InputField.defaultProps = {
	variant: 'base',
};
