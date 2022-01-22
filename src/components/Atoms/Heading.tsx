import styled, { css } from 'styled-components';

// Props
import {
	animation, AnimationProps,
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
	AnimationProps
	& HeadingType
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
			${props.theme.textStyle[props.as]};
			* {
				${props.theme.textStyle[props.as]};
				${responsive};
			}
		`};
	${animation};
	${position};
	${size};
	${space};
	${text};
	${visibility};
	${responsive};
`;

Heading.defaultProps = {
	as: 'h1',
	$textAlign: 'left',
	$textColor: 'primary',
	$initialDisplay: 'inline',
};
