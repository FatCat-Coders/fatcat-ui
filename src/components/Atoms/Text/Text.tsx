import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
	hover, HoverProps,
} from '../../../theme/props';

export const Text = styled.span<TextProps & VisibilityProps & SpaceProps & ResponsiveProps & HoverProps>`
	${text};
	${visibility};
	${space};
	${responsive};
	${hover};
`;
