/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

// React-icons
import * as icons from './icons';

export type TIconContainerProps = {
    size?: '18' | '20' | '24' | '28' | '32';
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
	color: ${props => (props.theme.color[props.color])};
	flex-shrink: 0;
  `;

// eslint-disable-next-line react/function-component-definition
export const Icon: React.FC<TIcon> = ({
	name, size = '18', color = 'primary',
}) => {
	const SvgIcon = icons[name];

	if (!SvgIcon) {
		throw new Error(`Icon "${name}" not found. Please ensure that the name is correct.`);
	}

	return (
		<IconContainer
			size={size}
			color={color as string}
		>
			<SvgIcon />
		</IconContainer>
	);
};
