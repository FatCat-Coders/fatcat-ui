import styled, { css } from 'styled-components';

// Props
import {
	position, PositionProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

// Types
import { HeadingType } from '../../utils/types';

export type THeading =
	HeadingType
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const Heading = styled.h1<THeading>`
	${props =>
		props.as &&
		css`
			${props.theme.headingStyles[props.as]};
			* {
				${props.theme.headingStyles[props.as]};
				${responsive};
			}
		`};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${responsive};
`;

Heading.defaultProps = {
	as: 'h1',
	textAlign: 'left',
	textColor: 'primary',
	initialDisplay: 'inline',
};
