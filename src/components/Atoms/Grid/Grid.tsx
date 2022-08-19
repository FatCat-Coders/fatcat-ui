import { styled } from '../../../utils/styled';

import {
	grid, GridProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TGrid = GridProps & GeneralProps;

export const Grid = styled('div') <TGrid>`
	${grid}
	${generalProps};
`;

Grid.defaultProps = {
	width: '100%',
	display: 'grid',
	initalDisplay: 'grid',
};
