import { styled } from '../../../utils/styled';

import {
	grid, GridProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TGrid = GridProps & GeneralProps;

export const Grid = styled('div') <TGrid>`
	width: 100%;
	${grid}
	${generalProps};
`;
