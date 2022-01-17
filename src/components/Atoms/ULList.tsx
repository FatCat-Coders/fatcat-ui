import styled, { css } from 'styled-components';

import {
	responsive, ResponsiveProps,
	space, SpaceProps,
	text, TextProps,
} from '../../theme/props';

const ullistCSS = {
	base: css`
        color: ${props => props.theme.color.white};
		content: '\\2022';
	`,
	checked: css`
		list-style-type: none;
		content: '\\f006';
		color: ${props => props.theme.color.white};
		font-family: 'FontAwesome';
		background-repeat: no-repeat;
		display: inline-block;

    `,
};

export type TULList =
	{
		model?: keyof typeof ullistCSS
	}
	& ResponsiveProps
	& SpaceProps
	& TextProps;

export const ULList = styled.ul<TULList>`
	list-style: none;
	position: relative;
	padding-left: ${props => props.theme.space.s32};
	${space};
	${text};
	${responsive};

	li::before {
		content: "";
		background-color: transparent;

		/* position the checkbox */
		position: absolute;
		left: -24px;
		top: 6px;

		/* setting the checkbox */
		/* short arm */
		width: 7px;
		border-bottom: 3px solid rgba(255, 255, 255);
		/* long arm */
		height: 13px;
		border-right: 3px solid rgba(255, 255, 255);

		/* rotate the mirrored L to make it a checkbox */
		transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	> li {
		color: white;
		position: relative;
		font-size: ${props => props.theme.fontSize.s18};
		${props => props.theme.media.tablet} {
			${props => props.theme.textSize.paragraph}
		}
	}
`;

ULList.defaultProps = {
	model: 'base',
};
