import React from 'react';
import { UIprops } from '../../../utils/ui-props';
import styled, { css, DefaultTheme, useTheme } from 'styled-components';

// Type definitions
import { PolymorphicComponent } from '../../../utils/polymorphic-component';

// Props
import {
	flex, FlexProps, generalProps, GeneralProps,
} from '../../../theme/props';

// Components
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import * as icons from '../Icon/icons';
import { Wrapper } from '../Wrapper';
import { calculateIconSize, calculatePaddingX, calculatePaddingBottom } from './helper';
import { Oval } from 'react-loader-spinner';

export type TButton = {
	buttonColor?: keyof DefaultTheme['buttonColor'] | undefined
	size?: keyof DefaultTheme['buttonSize']
	variant?: keyof DefaultTheme['buttonVariant']
	trailingIcon?: keyof typeof icons;
	leadingIcon?: keyof typeof icons;
	isLoading?: boolean;
} & FlexProps & GeneralProps;

export const ButtonBase = styled('button').withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TButton>`
    cursor: pointer;
    display: inline-block;
	font-weight: bold;
	${({ isLoading }) => isLoading &&
		css`
			&:disabled {
				opacity: 1;
			}
    `}
	${props => props.variant && props.theme.buttonVariant[props.variant].styles};
	${flex};
	${generalProps};
`;

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'> & TButton;
export type ButtonComponent = PolymorphicComponent<ButtonProps>;

// eslint-disable-next-line react/function-component-definition
export const Button: ButtonComponent = (props) => {
	const {
		children, trailingIcon, leadingIcon, isLoading = false, buttonColor = 'primary', variant = 'primary', size = 'large', textAlign = 'center', ...buttonProps
	} = props;
	const theme = useTheme();
	const color = (!buttonColor && theme.buttonColor[buttonProps.variant]) ? buttonProps.variant : buttonColor;
	const isTextLink = variant === 'textLink';

	return (
		<ButtonBase
			buttonColor={color}
			disabled={buttonProps.disabled || isLoading}
			size={size}
			variant={variant}
			textAlign={textAlign}
			{...buttonProps}
		>
			{isLoading ? (
				<Oval
					color="white"
					secondaryColor="#FAFAFA3D"
					strokeWidth={4}
					width={24}
					height={24}
				/>
			) : (
				<>
					{leadingIcon && !isTextLink && (
						<Icon
							name={leadingIcon} size={theme.buttonSize[size].iconSize} color={JSON.stringify(color)}
						/>
					)}
					<Wrapper paddingX={theme.buttonVariant[variant].textPadding.x} paddingBottom={theme.buttonVariant[variant].textPadding.bottom}>
						{children}
					</Wrapper>
					{trailingIcon && (
						<Flex w={isTextLink ? '24px' : 'fit-content'} flexShrink="0">
							<Icon
								name={trailingIcon} size={theme.buttonSize[size].iconSize}
								color={JSON.stringify(color)}
							/>
						</Flex>
					)}
				</>
			)}
		</ButtonBase>
	);
};
