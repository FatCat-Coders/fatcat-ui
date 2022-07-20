import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import {
	animation, AnimationProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TUlList =
	{
		variant?: keyof DefaultTheme['ullistStyle']
		bulletColor?: keyof DefaultTheme['color']
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const UlList = styled('ul')<TUlList>`
	list-style: none;
	padding-left: ${props => props.theme.space.s24};

	> li {
		position: relative;
	}

	${props => props.variant && props.theme.ullistStyle[props.variant]};
	${animation};
	${position};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

UlList.defaultProps = {
	variant: 'base',
	bulletColor: 'black',
};
