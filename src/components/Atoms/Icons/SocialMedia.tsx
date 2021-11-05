import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { COLOR } from '../../../theme/definitions';

import {
	responsive, ResponsiveProps,
	space, SpaceProps, text, TextProps, width, WidthProps,
} from '../../../theme/props';

export const SocialMedia = styled(FontAwesomeIcon)<SpaceProps & TextProps & ResponsiveProps & WidthProps>`
	color: ${COLOR.white};
    ${space};
    ${text};
    ${responsive};
	${width};
`;

export const SocialShare = styled(SocialMedia)`
  &:hover {
    color: ${COLOR.orange};
  }
`;
