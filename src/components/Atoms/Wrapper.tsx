import { styled } from '../../utils/styled';

import { generalProps, GeneralProps } from '../../theme/props';

export type TWrapper = GeneralProps;

export const Wrapper = styled('div') <TWrapper>`
	width: 100%;
	${generalProps}
`;

Wrapper.defaultProps = {
	initialDisplay: 'block',
};
