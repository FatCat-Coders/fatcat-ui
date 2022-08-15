import { styled } from '../../../utils/styled';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TText = GeneralProps;

export const Text = styled('span') <TText>`
	${props => props.theme.textStyle.text}
	${generalProps};
`;
