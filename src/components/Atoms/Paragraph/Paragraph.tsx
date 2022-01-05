import styled from 'styled-components';

// Props
import {
	background, BackgroundProps,
	border, BorderProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
	size, SizeProps,
} from '../../../theme/props';
import { hover, HoverProps } from '../../../theme/props/hover/hover';

export type ParagraphAtomProps = ResponsiveProps & TextProps & SpaceProps & SizeProps & BackgroundProps & BorderProps & HoverProps & VisibilityProps;

export const Paragraph = styled.p<ParagraphAtomProps>`
	letter-spacing: -0.01em;
	${text};
	${space};
	${size};
	${responsive};
	${background};
	${border};
	${hover};
	${visibility};
`;

Paragraph.defaultProps = {
	textSize: 'paragraph',
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
};
