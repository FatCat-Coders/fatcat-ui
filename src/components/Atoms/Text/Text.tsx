import styled from 'styled-components';

import {
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TText = GeneralProps

export const Text = styled.span<TText>`
	${props => props.theme.textVariant.text}
	${generalProps};
`;

Text.defaultProps = {
	initialDisplay: 'inline',
};
