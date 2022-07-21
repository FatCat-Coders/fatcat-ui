import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

// React-icons
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';

// Theme
import {
	animation, AnimationProps,
	hover, HoverProps,
	responsive, ResponsiveProps,
	size, SizeProps,
	space, SpaceProps,
	position, PositionProps,
	transition, TransitionsProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export type TIcon =
	{
		svgColor?: keyof DefaultTheme['color']
	}
	& AnimationProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TransitionsProps
	& VisibilityProps;

export const Icon = styled(AiFillStar) <TIcon>`
	${props => props.svgColor && `color: ${props.theme.color[props.svgColor]};`}
	${animation};
	${position};
	${size};
	${visibility};
    ${space};
	${transition}
    ${hover};
	${responsive};
`;
