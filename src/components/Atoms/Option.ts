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

type TOption =
	BackgroundProps
	& BorderProps
	& HoverProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps;

export const Option = styled.option<TOption>`
    ${background};
    ${border};
    ${size};
    ${space};
    ${text};
	${hover}
    ${responsive};
`;
