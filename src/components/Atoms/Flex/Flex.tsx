import { styled } from '../../../utils/styled';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TFlex = FlexProps & GeneralProps;

export const Flex = styled('div') <TFlex>`
	width: 100%;
	${flex};
	${generalProps};
`;

Flex.defaultProps = {
	initialDisplay: 'flex',
};
