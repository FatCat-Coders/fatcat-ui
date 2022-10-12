import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TImage = GeneralProps;

export const Image = styled.img.withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TImage>`
	${generalProps};
`;

Image.defaultProps = {
	width: '100%',
	alignSelf: 'center',
	display: 'block',
	initialDisplay: 'block',
};
