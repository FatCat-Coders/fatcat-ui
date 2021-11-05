import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	border, BorderProps,
	width, WidthProps,
	background, BackgroundProps,
	text, TextProps, height, HeightProps,
} from '../../../theme/props';

export const Option = styled.option<SpaceProps & ResponsiveProps & BorderProps & WidthProps & BackgroundProps & TextProps & HeightProps>`
    ${space};
    ${responsive};
    ${border};
    ${width};
    ${background};
    ${text};
    ${height};
`;
