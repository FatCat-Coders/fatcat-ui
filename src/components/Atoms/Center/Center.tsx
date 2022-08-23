import { styled } from '../../../utils/styled';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TCenter = FlexProps & GeneralProps;

export const Center = styled('div') <TCenter>`
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
