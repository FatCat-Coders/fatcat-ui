import styled, { DefaultTheme } from 'styled-components';

import {
	animation, AnimationProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TULList =
	{
		$variant?: keyof DefaultTheme['ullistStyle']
		$bulletColor?: keyof DefaultTheme['color']
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const ULList = styled.ul<TULList>`
	list-style: none;
	padding-left: ${props => props.theme.space.s24};

	> li {
		position: relative;
	}

	${props => props.$variant && props.theme.ullistStyle[props.$variant]};
	${animation};
	${position};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

ULList.defaultProps = {
	$variant: 'base',
	$bulletColor: 'black',
};
