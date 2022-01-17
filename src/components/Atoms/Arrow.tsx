import styled from 'styled-components';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Themes
import {
	space, SpaceProps,
	text, TextProps,
} from '../../theme/props';

type TArrow =
	SpaceProps
	& TextProps;

export const Arrow = styled(FontAwesomeIcon) <TArrow>`
	cursor: pointer;
    width: 10px;
    height: 13px;
	margin-bottom: 2px;
    font-weight: lighter;
	${text};
    ${space};

	&:hover {
		color: ${props => props.theme.color.orange};
	}
`;
