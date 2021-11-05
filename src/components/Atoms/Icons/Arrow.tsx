import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Themes
import {
	space, SpaceProps,
	text, TextProps,
} from '../../../theme/props';
import { COLOR } from '../../../theme/definitions';

export const Arrow = styled(FontAwesomeIcon)<TextProps & SpaceProps>`
    ${text};
    ${space};
	cursor: pointer;
    width: 10px;
    height: 13px;
	margin-bottom: 2px;
    font-weight: lighter;
    
	&:hover {
		color: ${COLOR.orange} ;
	}
`;
