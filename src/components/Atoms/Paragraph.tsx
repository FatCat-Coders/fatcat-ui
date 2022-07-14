
import { styled } from '../../utils/styled';

// Props
import {
	animation, AnimationProps,
	background, BackgroundProps,
	border, BorderProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TParagraph =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Paragraph = styled('p')<TParagraph>`
	${props => props.theme.textStyle.paragraph}
	${animation};
	${background};
	${border};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

Paragraph.defaultProps = {
	textSize: 'paragraph',
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
};
