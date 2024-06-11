import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TFlex = FlexProps & GeneralProps;

export const Flex = styled.div<TFlex>`
	${flex};
	${generalProps};
`;

Flex.defaultProps = {
	w: '100%',
	display: 'flex',
	initialDisplay: 'flex',
};
