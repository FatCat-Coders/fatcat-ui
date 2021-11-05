import styled from 'styled-components';
import { FONT_SIZE, MEDIA } from '../../../theme/definitions';
import {
	responsive, ResponsiveProps, text, TextProps, 	space, SpaceProps,
} from '../../../theme/props';

export type ListAtomProps = ResponsiveProps & TextProps & SpaceProps;

export const List = styled.ul<ListAtomProps>`
	list-style: none;
	position: relative;
	padding-left: ${props => props.theme.space.s24};
	${responsive};
	${text};
	${space};


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
		${MEDIA.tablet} {
			top: 1px;
			font-size: 20px;
		}
	}

	> li {
		${FONT_SIZE.s18};
		padding-bottom: ${props => props.theme.space.s24};
		
		${MEDIA.tablet} {
			${FONT_SIZE.s16};
		}
		${text};
	}
`;
