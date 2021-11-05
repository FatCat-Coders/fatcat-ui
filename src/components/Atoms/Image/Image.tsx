import styled from 'styled-components';
import {
	height, HeightProps,
	width, WidthProps,
	border, BorderProps,
	visibility, VisibilityProps,
	position, PositionProps,
	responsive, ResponsiveProps, space, SpaceProps, text, opacity, OpacityProps,
} from '../../../theme/props';

export type ImageAtomProps = HeightProps & WidthProps & BorderProps & VisibilityProps & PositionProps & ResponsiveProps & OpacityProps & SpaceProps & { inline?: boolean }

export const Image = styled.img<ImageAtomProps>`
	display: ${props => (props.inline ? 'inline-block' : 'block')};
	align-self: center;
	width: 100%;
	${width};
	${height};
	${border};
	${visibility};
	${position};
	${responsive};
	${space};
	${text};
	${opacity};
`;

Image.defaultProps = {
	initialDisplay: 'block',
};
