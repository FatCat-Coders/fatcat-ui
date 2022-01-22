import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	animation, AnimationProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TSocialMedia =
	AnimationProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& HoverProps
	& TextProps
	& VisibilityProps;

export const SocialMedia = styled(FontAwesomeIcon) <TSocialMedia>`
	color: ${props => props.theme.color.white};
	${animation};
	${position};
	${size};
	${visibility};
    ${space};
    ${text};
	${hover}
    ${responsive};
`;

export const SocialShare = styled(SocialMedia)`
	&:hover {
		color: ${props => props.theme.color.orange};
`;
