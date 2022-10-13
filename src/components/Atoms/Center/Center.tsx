import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TCenter = FlexProps & GeneralProps;

export const Center = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TCenter>`
	${flex};
	${generalProps};
`;

Center.defaultProps = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	initialDisplay: 'flex',
};
