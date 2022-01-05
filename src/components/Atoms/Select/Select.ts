import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	border, BorderProps,
	size, SizeProps,
	background, BackgroundProps,
	text, TextProps,
} from '../../../theme/props';

export const Select = styled.select<SpaceProps & ResponsiveProps & BorderProps & SizeProps & BackgroundProps & TextProps>`
	${space};
	${responsive};
    ${border};
    ${size};
    ${background};
    ${text};
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
`;
