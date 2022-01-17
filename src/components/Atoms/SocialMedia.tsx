import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
} from '../../theme/props';

export type TSocialMedia =
	ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps;

export const SocialMedia = styled(FontAwesomeIcon) <TSocialMedia>`
	color: ${props => props.theme.color.white};
	${size};
    ${space};
    ${text};
    ${responsive};
`;

export const SocialShare = styled(SocialMedia)`
	&:hover {
		color: ${props => props.theme.color.orange};
`;
