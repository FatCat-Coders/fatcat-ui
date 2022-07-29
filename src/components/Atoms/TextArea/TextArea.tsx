import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TTextArea = {
	variant?: keyof DefaultTheme['inputStyle']
} & GeneralProps;

export const TextArea = styled('textarea') <TTextArea>`
	resize: none;
	width: 100%;
	&::placeholder {
		color: ${props => props.theme.color.white};
        opacity: 50%;
		text-transform: uppercase;
	}

	${props => props.variant && props.theme.inputStyle[props.variant]};
	${generalProps};
`;

TextArea.defaultProps = {
	variant: 'base',
};
