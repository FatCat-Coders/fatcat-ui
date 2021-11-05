import styled from 'styled-components';

// Props
import {
	background, BackgroundProps,
	border, BorderProps,
	height, HeightProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
	width, WidthProps,
} from '../../../theme/props';
import { hover, HoverProps } from '../../../theme/props/hover/hover';

export type ParagraphAtomProps = ResponsiveProps & TextProps & SpaceProps & WidthProps & HeightProps & BackgroundProps & BorderProps & HoverProps & VisibilityProps;

export const Paragraph = styled.p<ParagraphAtomProps>`
	letter-spacing: -0.01em;
	${text};
	${space};
	${width};
	${height};
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
