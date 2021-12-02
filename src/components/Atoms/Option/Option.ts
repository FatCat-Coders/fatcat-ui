import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	border, BorderProps,
	size, SizeProps,
	background, BackgroundProps,
	text, TextProps,
} from '../../../theme/props';

export const Option = styled.option<SpaceProps & ResponsiveProps & BorderProps & SizeProps & BackgroundProps & TextProps>`
    ${space};
    ${responsive};
    ${border};
    ${size};
    ${background};
    ${text};
`;
