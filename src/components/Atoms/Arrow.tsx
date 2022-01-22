import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Themes
import {
	animation, AnimationProps,
	position, PositionProps,
	space, SpaceProps,
	text, TextProps,
	hover, HoverProps,
	visibility, VisibilityProps,
	responsive, ResponsiveProps,
} from '../../theme/props';

export type TArrow =
	AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Arrow = styled(FontAwesomeIcon) <TArrow>`
	cursor: pointer;
    width: 10px;
    height: 13px;
	margin-bottom: 2px;
    font-weight: lighter;

	&:hover {
		color: ${props => props.theme.textColor.primary};
	}
	${animation};
	${position};
	${text};
	${visibility};
    ${space};
	${hover}
	${responsive}
`;
