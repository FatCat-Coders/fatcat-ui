import styled from 'styled-components';
import { UIprops } from '../../utils/ui-props';

import { generalProps, GeneralProps } from '../../theme/props';

export type TOption =
	& GeneralProps;

export const Option = styled.option.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TOption>`
	${generalProps};
`;
