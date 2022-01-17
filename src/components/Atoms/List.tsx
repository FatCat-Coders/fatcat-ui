import styled from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
} from '../../theme/props';

export type TList =
	ResponsiveProps
	& SpaceProps
	& TextProps;

export const List = styled.ul<TList>`
	list-style: none;
	position: relative;
	padding-left: ${props => props.theme.space.s24};
	${text};
	${space};
	${responsive};


	li::before {
		content: '\\2022';
		display: block;
		position: relative;
		max-width: 0;
		max-height: 9px;
		left: -24px;
		vertical-align:middle;
		top: 5px;
		color: ${props => props.theme.color.white};
		font-size:20px;
		${props => props.theme.media.tablet} {
			top: 1px;
			font-size: 20px;
		}
	}

	> li {
		${props => props.theme.fontSize.s18};
		padding-bottom: ${props => props.theme.space.s24};
		${text};

		${props => props.theme.media.tablet} {
			${props => props.theme.fontSize.s16};
		}
	}
`;
