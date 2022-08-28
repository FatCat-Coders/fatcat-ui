import { styled } from '../../../utils/styled';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TImage = GeneralProps;

export const Image = styled('img') <TImage>`
	${generalProps};
`;

Image.defaultProps = {
	width: '100%',
	alignSelf: 'center',
	display: 'block',
	initialDisplay: 'block',
};
