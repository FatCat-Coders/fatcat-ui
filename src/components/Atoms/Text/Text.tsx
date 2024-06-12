import styled from 'styled-components';

import {
	generalProps, GeneralProps,
} from '../../../theme/props';
import { UIprops } from '../../../utils/ui-props';

export type TText = GeneralProps

export const Text = styled.span.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
})<TText>`
	${props => props.theme.textVariant.text}
	${generalProps};
`;

Text.defaultProps = {
	initialDisplay: 'inline',
};
