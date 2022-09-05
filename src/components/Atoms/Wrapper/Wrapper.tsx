import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TWrapper = GeneralProps;

export const Wrapper = styled.div.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TWrapper>`
	${generalProps}
`;

Wrapper.defaultProps = {
	width: '100%',
	initialDisplay: 'block',
};
