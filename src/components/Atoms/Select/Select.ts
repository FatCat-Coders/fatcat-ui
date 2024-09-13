import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TSelect = GeneralProps;

export const Select = styled.select.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TSelect>`
    appearance:none;
	&:hover {
		border-color: ${props => props.theme.color.neutrals500};
	}
	${generalProps};
`;
