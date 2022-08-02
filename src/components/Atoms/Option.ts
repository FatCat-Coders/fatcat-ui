import { styled } from '../../utils/styled';

import { generalProps, GeneralProps } from '../../theme/props';

export type TOption =
	& GeneralProps;

export const Option = styled('option') <TOption>`
	${generalProps};
`;
