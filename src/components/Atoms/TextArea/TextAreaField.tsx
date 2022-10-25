import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TTextAreaField = {
	variant?: keyof DefaultTheme['inputVariant']
} & GeneralProps;

export const TextAreaField = styled.textarea.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TTextAreaField>`
	resize: none;
	${props => props.variant && props.theme.inputVariant[props.variant]};
	${generalProps};
`;

TextAreaField.defaultProps = {
	variant: 'base',
};
