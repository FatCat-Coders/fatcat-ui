import styled, { css } from 'styled-components';

// themes
import {
	responsive, ResponsiveProps,
	space, SpaceProps,
} from '../../theme/props';

const ollistCSS = {
	base: css`
		color: ${props => props.theme.color.white};
	`,
	red: css`
		color: ${props => props.theme.color.purple};
	`,
};

export type TOlList =
	{
		model?: keyof typeof ollistCSS,
	}
	& ResponsiveProps
	& SpaceProps;

export const OlList = styled.ol<TOlList>`
	list-style: none;
	counter-reset: item;
	position: relative;
	border-radius: 40px;
	padding-left: 24px;
	color: ${props => props.theme.color.purple};
	${space};
	${responsive};

	> li {
		counter-increment: item;
		position: relative;
		&:before {
			${props => props.model && ollistCSS[props.model]};
			content: counter(item) ". ";
			position: absolute;
			font-size: ${props => props.theme.fontSize.s18};
			font-weight: 700;
			text-align: right;
			display: inline;
			width: 20px;
			margin-left: -30px;
			padding-top: 7px;
		}
		font-size: ${props => props.theme.fontSize.s18};
	}
`;

OlList.defaultProps = {
	model: 'base',
};
