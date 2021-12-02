import styled from 'styled-components';
import {
	size, SizeProps,
	border, BorderProps,
	visibility, VisibilityProps,
	position, PositionProps,
	responsive, ResponsiveProps, space, SpaceProps, text, opacity, OpacityProps,
} from '../../../theme/props';

export type ImageAtomProps = SizeProps & BorderProps & VisibilityProps & PositionProps & ResponsiveProps & OpacityProps & SpaceProps & { inline?: boolean }

export const Image = styled.img<ImageAtomProps>`
	display: ${props => (props.inline ? 'inline-block' : 'block')};
	align-self: center;
	width: 100%;
	${size};
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
