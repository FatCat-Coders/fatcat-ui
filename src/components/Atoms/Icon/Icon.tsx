/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

// React-icons
import * as icons from './icons';

type IconSizes = [18, 20, 24, 28, 32];

export type TIconContainerProps = {
    size?: IconSizes[number] | `${IconSizes[number]}`
    color?: keyof DefaultTheme['color'];
};

export type TIcon = {
    name: keyof typeof icons;
} & TIconContainerProps;

const calculateStrokeWidth = (size: TIcon['size']) => {
	switch (size) {
		case '24': return '1.7';
		case '28':
		case '32': return '2';
		default: return '1.5';
	}
};

const IconContainer = styled.svg.attrs<TIconContainerProps>(props => ({
	viewBox: '0 0 18 18',
	xmlns: 'http://www.w3.org/2000/svg',
	fill: 'none',
	height: `${props.size}px`,
	width: `${props.size}px`,
	strokeWidth: `${calculateStrokeWidth(props.size)}`,
})).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['size', 'color'].includes(prop) && defaultValidatorFn(prop),
})<TIconContainerProps>`
	${props => props.color && css`color: ${props.theme.color[props.color]};`}
	flex-shrink: 0;
  `;

export function Icon(props: TIcon) {
	const {
		name,
		size = 24,
		color,
	} = props;

	const SvgIcon = icons[name];

	if (!SvgIcon) {
		throw new Error(`Icon "${name}" not found. Please ensure that the name is correct.`);
	}

	return (
		<IconContainer
			size={size}
			color={color}
		>
			<SvgIcon />
		</IconContainer>
	);
}
