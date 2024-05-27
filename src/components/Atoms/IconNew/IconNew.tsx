/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

// React-icons
import * as icons from '../../../utils/icons';

export type TIconContainerProps = {
    size?: '18' | '20' | '24' | '28' | '32';
    color?: keyof DefaultTheme['color'];
};

export type TIconNew = {
    name: keyof typeof icons;
} & TIconContainerProps;

const calculateStrokeWidth = (size: TIconNew['size']) => {
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
})).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['size', 'color'].includes(prop) && defaultValidatorFn(prop),
})<TIconContainerProps>`
	height: ${props => props.size}px;
	width: ${props => props.size}px;
	stroke-width: ${props => calculateStrokeWidth(props.size)};
	color: ${props => (props.theme.color[props.color])};
  `;

// eslint-disable-next-line react/function-component-definition
export const IconNew: React.FC<TIconNew> = ({
	name, size = '18', color = 'primary',
}) => {
	const SvgIcon = icons[name];

	if (!SvgIcon) {
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <></>;
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
