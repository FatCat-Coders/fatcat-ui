import styled from 'styled-components';

import {
	hover, HoverProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

type TText =
	& HoverProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Text = styled.span<TText>`
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;
