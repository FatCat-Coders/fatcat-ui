import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Theme
import {
	space, SpaceProps, text, TextProps,
} from '../../../theme/props';
import { hover, HoverProps } from '../../../theme/props/hover/hover';

export const Icon = styled(FontAwesomeIcon)<TextProps & SpaceProps & HoverProps>`
    ${text};
    ${space};
    ${hover};
`;
