import React from 'react';
import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Theme
import { generalProps, GeneralProps } from '../../../theme/props';

export type TLink =
	{
		disabled?: boolean
		withArrow?: boolean
		arrowColor?: keyof DefaultTheme['color']
		variant?: keyof DefaultTheme['linkStyle']
	} & GeneralProps;

export const LinkBase = styled('a') <TLink>`
	cursor: pointer;
	${props => props.variant && props.theme.linkStyle[props.variant]};
	${generalProps};
`;

const Arrow = styled('i')<{arrowColor?:keyof DefaultTheme['color']}>`
	border-style: solid;
	border-color: ${props => (props.arrowColor ? props.theme.color[props.arrowColor] : 'inherit')};
	border-width: 0 calc(1em * 0.09) calc(1em * 0.09) 0;
	display: inline-block;
	width: calc(1em/3);
	height: calc(1em/3);
	transform: rotate(-45deg) translateY(-33%);
	margin-left: 0.6em;
`;

export type LinkProps = Omit<JSX.IntrinsicElements['a'], 'type'> & TLink;
export type LinkComponent = PolymorphicComponent<LinkProps>;

export const Link: LinkComponent = (props) => {
	const {
		children, to, withArrow, arrowColor, ...linkProps
	} = props;
	return (
		// eslint-disable-next-line
		<LinkBase href={to} to={props.as ? to : undefined} {...linkProps}>
			{children}
			{withArrow && <Arrow arrowColor={arrowColor} />}
		</LinkBase>
	);
};

Link.defaultProps = {
	variant: 'base',
	disabled: false,
	withArrow: false,
	arrowColor: undefined,
};
