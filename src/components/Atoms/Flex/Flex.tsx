import { styled } from '../../../utils/styled';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TFlex = FlexProps & GeneralProps;

export const Flex = styled('div') <TFlex>`
	${flex};
	${generalProps};
`;

Flex.defaultProps = {
	width: '100%',
	initialDisplay: 'flex',
};
