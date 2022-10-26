import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Theme
import { generalProps, GeneralProps } from '../../../theme/props';

export type TLink =
	{
		disabled?: boolean
		withArrow?: boolean
		arrowColor?: keyof DefaultTheme['color']
		linkColor?: keyof DefaultTheme['linkColor'] | undefined
		variant?: keyof DefaultTheme['linkVariant']
	} & GeneralProps;

export const LinkBase = styled.a.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TLink>`
	cursor: pointer;
	${props => props.variant && props.theme.linkVariant[props.variant]};
	${generalProps};
`;

const Arrow = styled.i<{arrowColor?:keyof DefaultTheme['color']}>`
	border-style: solid;
	border-color: ${props => (props.arrowColor ? props.theme.color[props.arrowColor] : 'inherit')};
	border-width: 0 0.09em 0.09em 0;
	display: inline-block;
	width: 0.33em;
	height: 0.33em;
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
	linkColor: 'primary',
	disabled: false,
	withArrow: false,
	arrowColor: undefined,
	initialDisplay: 'inline',
};
