import React from 'react';
import styled, { css } from 'styled-components';

import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Theme
import {
	responsive, ResponsiveProps,
	text, TextProps,
} from '../../../theme/props';
import { hover, HoverProps } from '../../../theme/props/hover/hover';
import { TEXT_SIZE } from '../../../theme/styles';
import { FONT_SIZE } from '../../../theme/definitions';

const linkCSS = {
	base: css`
		color: ${props => props.theme.color.yellow};
		font-weight: ${props => props.theme.fontWeight.bold};
		${TEXT_SIZE.link}
		letter-spacing: 2px;
		width: fit-content;
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
		&:hover {
			padding-bottom: 2px;
			border-bottom: 1px solid ${props => props.theme.color.yellow};
			width: fit-content;
		}
	`,
	white: css`
		color: ${props => props.theme.color.white};
		font-weight: ${props => props.theme.fontWeight.bold};
		${TEXT_SIZE.paragraph14}
        opacity: 80%;
		&:hover {
			color: ${props => props.theme.color.yellow};
			opacity: 100%;

		}
	`,
	filter: css`
		color: ${props => props.theme.color.white};
		${TEXT_SIZE.paragraph}
		opacity: 70%;
		&.active {
			padding-bottom: 4px;
			opacity: 100%;
			border-bottom-style: solid;
			border-bottom-width: 5px;
			width: fit-content;
			border-bottom-color: ${props => props.theme.color.purple};
		}
		&:hover {
			opacity: 100%;
		}
	`,
	header: css`
		white-space: nowrap;
		font-size: ${props => props.theme.fontSize.s16};
		color: ${props => props.theme.color.white};
	`,
	blog: css`
		color: ${props => props.theme.color.yellow};
		font-size: ${FONT_SIZE.s18};
		padding-bottom: 2px;
		width: fit-content;
		border-bottom: 1px solid transparent;
		&:hover {
			padding-bottom: 2px;
			border-bottom: 1px solid ${props => props.theme.color.yellow};
			width: fit-content;
		}
	`,
	white50: css`
		color: ${props => props.theme.color.white};
		${TEXT_SIZE.paragraph}
		opacity: 50%;
		&:hover {
			color: ${props => props.theme.color.yellow};
            opacity: 100%;
		}
		&.active {
			opacity: 100%;
		}
	`,
};

type LinkAtomProps = TextProps & ResponsiveProps & HoverProps & {
	type?: keyof typeof linkCSS
}

export const LinkBase = styled.a<LinkAtomProps>`
	cursor: pointer;
	${props => props.type && linkCSS[props.type]};
	${text};
	${responsive};
	${hover};
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & LinkAtomProps;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const { children, ...linkProps } = props;
	return <LinkBase {...linkProps}>{children}</LinkBase>;
};

Link.defaultProps = {
	type: 'base',
};
