import styled from 'styled-components';

import {
	generalProps2, GeneralProps2,
} from '../../../theme/props';

export type TText = GeneralProps2

export const Text = styled.span<TText>`
	${props => props.theme.textVariant.text}
	${generalProps2};
`;

Text.defaultProps = {
	initialDisplay: 'inline',
};
