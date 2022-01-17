import styled from 'styled-components';

// Props
import {
	background, BackgroundProps,
	border, BorderProps,
	hover, HoverProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TParagraph =
	BackgroundProps
	& BorderProps
	& HoverProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Paragraph = styled.p<TParagraph>`
	letter-spacing: -0.01em;
	${background};
	${border};
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
