import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import {
	grid, GridProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TGrid = GridProps & GeneralProps;

export const Grid = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TGrid>`
	${grid}
	${generalProps};
`;

Grid.defaultProps = {
	width: '100%',
	display: 'grid',
	initialDisplay: 'grid',
};
