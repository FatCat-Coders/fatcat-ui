import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TSelect = GeneralProps;

export const Select = styled.select.withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TSelect>`
    appearance:none;
	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
	${generalProps};
`;
