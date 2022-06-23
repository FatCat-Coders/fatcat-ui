import styled, { DefaultTheme } from 'styled-components';

// themes
import {
	animation, AnimationProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TOlList =
	{
		$variant?: keyof DefaultTheme['ollistStyle']
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& TextProps
	& VisibilityProps;

export const OlList = styled.ol<TOlList>`
	list-style: none;
	counter-reset: item;
	position: relative;
	border-radius: 40px;
	padding-left: 24px;

	> li {
		counter-increment: item;
		position: relative;
		&:before {
			content: counter(item) ". ";
			position: absolute;
			font-size: 1em;
			font-weight: 700;
			text-align: right;
			display: inline;
			width: 20px;
			margin-left: -30px;
		}
		font-size: ${props => props.theme.fontSize.s18};
	}

	${props => props.$variant && props.theme.ollistStyle[props.$variant]};
	${animation};
	${position};
	${space};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

OlList.defaultProps = {
	$variant: 'base',
};
