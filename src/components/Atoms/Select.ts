import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	border, BorderProps,
	size, SizeProps,
	background, BackgroundProps,
	text, TextProps,
	hover, HoverProps,
} from '../../theme/props';

type TSelect =
	BackgroundProps
	& BorderProps
	& HoverProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps;

export const Select = styled.select<TSelect>`
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
	${space};
    ${border};
    ${size};
    ${background};
    ${text};
	${hover};
	${responsive};

	&:hover {
		border-color: ${props => props.theme.color.grey};
	}
`;
