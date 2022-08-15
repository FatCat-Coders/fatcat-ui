import React from 'react';
import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Theme
import { generalProps, GeneralProps } from '../../../theme/props';

export type TLink = {
	variant?: keyof DefaultTheme['linkStyle']
} & GeneralProps;

export const LinkBase = styled('a') <TLink>`
	cursor: pointer;
	${props => props.variant && props.theme.linkStyle[props.variant]};
	${generalProps};
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & TLink;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const { children, to, ...linkProps } = props;
	return <LinkBase href={to} to={props.as ? to : undefined} {...linkProps}>{children}</LinkBase>; // eslint-disable-line
};

Link.defaultProps = {
	variant: 'base',
};
