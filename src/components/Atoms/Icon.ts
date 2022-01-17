import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Theme
import {
	hover, HoverProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
} from '../../theme/props';

type TIcon =
	& HoverProps
	& ResponsiveProps
	& SpaceProps
	& TextProps;

export const Icon = styled(FontAwesomeIcon) <TIcon>`
    ${space};
    ${text};
    ${hover};
	${responsive}
`;
