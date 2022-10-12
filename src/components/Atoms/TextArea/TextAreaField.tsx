import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TTextAreaField = {
	variant?: keyof DefaultTheme['inputStyle']
} & GeneralProps;

export const TextAreaField = styled.textarea.withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TTextAreaField>`
	resize: none;
	${props => props.variant && props.theme.inputStyle[props.variant]};
	${generalProps};
`;

TextAreaField.defaultProps = {
	variant: 'base',
};
