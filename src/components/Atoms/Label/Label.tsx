import { generalProps, GeneralProps } from '../../../theme/props';
import { styled } from '../../../utils/styled';

export type TLabel = GeneralProps;

export const Label = styled('label') <TLabel>`
	${generalProps};
`;
