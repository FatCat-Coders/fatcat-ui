import { styled } from '../../../utils/styled';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TImage = {
	inline?: boolean
} & GeneralProps;

export const Image = styled('img') <TImage>`
	display: ${props => (props.inline ? 'inline-block' : 'block')};
	align-self: center;
	width: 100%;
	${generalProps};
`;

Image.defaultProps = {
	initialDisplay: 'block',
};
