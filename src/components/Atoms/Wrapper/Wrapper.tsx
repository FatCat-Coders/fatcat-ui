import { styled } from '../../../utils/styled';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TWrapper = GeneralProps;

export const Wrapper = styled('div') <TWrapper>`
	${generalProps}
`;

Wrapper.defaultProps = {
	width: '100%',
	initialDisplay: 'block',
};
