import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	border, BorderProps,
	width, WidthProps,
	background, BackgroundProps,
	text, TextProps,
	height, HeightProps,
} from '../../../theme/props';

export const Select = styled.select<SpaceProps & ResponsiveProps & BorderProps & WidthProps & BackgroundProps & TextProps & HeightProps>`
	${space};
	${responsive};
    ${border};
    ${width};
	${height};
    ${background};
    ${text};
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
`;
