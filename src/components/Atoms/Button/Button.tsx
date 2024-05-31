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
	${props => props.variant && props.theme.buttonVariant[props.variant]};
	${flex};
	${generalProps};
	${({ isLoading }) => isLoading &&
		css`
			&:disabled {
				opacity: 1;
			}
    `}
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
			display="flex"
			gap={isTextLink ? '6px' : '4px'}
			alignItems="center"
			disabled={buttonProps.disabled || isLoading}
			{...{
				size, variant, textAlign, ...buttonProps,
			}}
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
						<Flex>
							<Icon name={leadingIcon} size={calculateIconSize(buttonProps.size)} color={JSON.stringify(color)} />
						</Flex>
					)}
					<Wrapper paddingX={calculatePaddingX(variant)} paddingBottom={calculatePaddingBottom(variant)}>
						{children}
					</Wrapper>
					{trailingIcon && (
						<Flex w={isTextLink ? '24px' : 'fit-content'} flexShrink="0">
							<Icon
								name={trailingIcon} size={isTextLink ? '20' : calculateIconSize(buttonProps.size)}
								color={JSON.stringify(color)}
							/>
						</Flex>
					)}
				</>
			)}
		</ButtonBase>
	);
};
