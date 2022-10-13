import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TText = GeneralProps;

export const Text = styled.span.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TText>`
	${props => props.theme.textStyle.text}
	${generalProps};
`;

Text.defaultProps = {
	initialDisplay: 'inline',
};
