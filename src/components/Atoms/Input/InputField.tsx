import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TInputField = {
	variant?: keyof DefaultTheme['inputVariant']
} & GeneralProps;

export const InputField = styled.input.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TInputField>`
	${props => props.variant && props.theme.inputVariant[props.variant]};
	${generalProps};
`;

InputField.defaultProps = {
	variant: 'base',
};
