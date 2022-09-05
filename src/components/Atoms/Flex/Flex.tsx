import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TFlex = FlexProps & GeneralProps;

export const Flex = styled.div.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TFlex>`
	${flex};
	${generalProps};
`;

Flex.defaultProps = {
	width: '100%',
	display: 'flex',
	initialDisplay: 'flex',
};
