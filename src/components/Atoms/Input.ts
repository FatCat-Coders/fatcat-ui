import { styled } from '../../utils/styled';
import { css, DefaultTheme } from 'styled-components';

import {
	BackgroundProps,
	animation, AnimationProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TInput =
	{
		variant?: keyof DefaultTheme['inputStyle']
	}
	& AnimationProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const InputField = styled('input')<TInput & BackgroundProps>`
	${props => props.variant && props.theme.inputStyle[props.variant]};

	${animation};
	${border};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
	${props => (props.backgroundImage
		? css`
			background: url(${props.backgroundImage}) scroll no-repeat 94%;`
		: css`
			background: none;
			-webkit-background-clip: text;
	`)};
`;

export type TTextArea = TInput;

export const TextArea = styled('textarea')<TTextArea>`
	resize: none;
	width: 100%;
	&::placeholder {
		color: ${props => props.theme.color.white};
        opacity: 50%;
		text-transform: uppercase;
	}

	${props => props.variant && props.theme.inputStyle[props.variant]};
	${animation};
	${border};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

InputField.defaultProps = {
	variant: 'base',
};

TextArea.defaultProps = {
	variant: 'base',
};
