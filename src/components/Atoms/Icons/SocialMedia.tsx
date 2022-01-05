import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { COLOR } from '../../../theme/definitions';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	size, SizeProps,
} from '../../../theme/props';

export const SocialMedia = styled(FontAwesomeIcon) <SpaceProps & TextProps & ResponsiveProps & SizeProps>`
	color: ${COLOR.white};
    ${space};
    ${text};
    ${responsive};
	${size};
`;

export const SocialShare = styled(SocialMedia)`
  &:hover {
    color: ${COLOR.orange};
  }
`;
