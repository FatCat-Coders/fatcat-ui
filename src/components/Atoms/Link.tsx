import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { PolymorphicComponent } from '../../utils/polymorphic-component';

// Theme
import {
	hover, HoverProps,
	responsive, ResponsiveProps,
	text, TextProps,
} from '../../theme/props';

type Tlink =
	{
		variant?: keyof DefaultTheme['linkStyle']
	}
	& HoverProps
	& ResponsiveProps
	& TextProps;

export const LinkBase = styled.a<Tlink>`
	cursor: pointer;
	${props => props.variant && props.theme.linkStyle[props.variant]};
	${text};
	${hover};
	${responsive};
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & Tlink;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const { children, ...linkProps } = props;
	return <LinkBase {...linkProps}>{children}</LinkBase>;
};

Link.defaultProps = {
	variant: 'base',
};
