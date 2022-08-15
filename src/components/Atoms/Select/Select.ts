import { styled } from '../../../utils/styled';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TSelect = GeneralProps;

export const Select = styled('select') <TSelect>`
    appearance:none;
	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
	${generalProps};
`;
