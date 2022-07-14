
import { styled } from '../../utils/styled';
import { DefaultTheme } from 'styled-components';

import {
	animation, AnimationProps,
	hover, HoverProps,
	position, PositionProps,
	responsive, ResponsiveProps,
	text, TextProps,
	border, BorderProps,
	background, BackgroundProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TTable =
	{
		variant?: keyof DefaultTheme['tableStyle']
	}
	& AnimationProps
	& BackgroundProps
	& BorderProps
	& HoverProps
	& PositionProps
	& ResponsiveProps
	& TextProps
	& VisibilityProps;

export const Table = styled('table')<TTable>`
	thead th {
		border-bottom: 5px solid ${props => props.theme.color.white10};
		:nth-child(1) {
			color: ${props => props.theme.color.white};
			text-align: left;
		}
		color: ${props => props.theme.color.white50};
		text-align: center;
	}

	tbody td {
		:nth-child(1) {
			color: ${props => props.theme.color.white};
			text-align: center;
		}
		text-align: center;
		padding: 20px 20px;
	}

	${props => props.variant && props.theme.tableStyle.[props.variant]};
	${animation};
	${background};
	${border};
	${position};
	${text};
	${visibility};
	${hover};
	${responsive};
`;

Table.defaultProps = {
	variant: 'pricing',
};
