import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import {
	animation, AnimationProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TTextArea =
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

export const TextArea = styled('textarea') <TTextArea>`
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

TextArea.defaultProps = {
	variant: 'base',
};
