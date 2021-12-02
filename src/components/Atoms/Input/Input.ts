import styled, { css } from 'styled-components';

import {
	background, BackgroundProps,
	border, BorderProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	size, SizeProps,
} from '../../../theme/props';
import { TEXT_SIZE } from '../../../theme/styles';

const inputCSS = {
	base: css`
		appearance: none;
		border: 1px solid ${props => props.theme.color.white};
        padding: 21px;
        color: ${props => props.theme.textColor.primary};
		opacity: 50%;
        font-weight: ${props => props.theme.fontWeight.bold};
		background: none;
		position: relative;
		outline: 0;
		-webkit-background-clip: text;
		${TEXT_SIZE.button};
        ${text};
		${space};
        ${border};
		${responsive};
		${size};
		
		&:hover {
			border-color: ${props => props.theme.color.white};
            opacity: 100%;
		}
		
		&:focus {
			border-color: ${props => props.theme.color.yellow};
		}
		&::placeholder {
			color: ${props => props.theme.color.white};
			opacity: 50%;
			text-transform: uppercase;
		}
    `,
};

type InputAtomProps = {
    variant?: keyof typeof inputCSS
}

export const InputField = styled.input<InputAtomProps & SpaceProps & TextProps & BorderProps & ResponsiveProps & SizeProps & BackgroundProps>`
	${props => props.variant && inputCSS[props.variant]};
    ${props => (props.backgroundImage ? css`background: url(${props.backgroundImage}) scroll no-repeat 94%` : css`background: none; -webkit-background-clip: text`)};

`;

export const TextArea = styled.textarea<InputAtomProps & SpaceProps & TextProps & SizeProps>`
	resize: none;
	width: 100%;
	${space};
	${size};
	${props => props.variant && inputCSS[props.variant]};

	&::placeholder {
		color: ${props => props.theme.color.white};
        opacity: 50%;
		text-transform: uppercase;
	}
`;

InputField.defaultProps = {
	variant: 'base',
};

TextArea.defaultProps = {
	variant: 'base',
};
