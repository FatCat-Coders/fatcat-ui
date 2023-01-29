import { Properties } from 'csstype';
import React, { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	CheckIcon,
	CheckboxContainer,
	CheckboxWrapper,
	CheckboxInput,
} from './Checkbox.atoms';

export interface TCheckbox extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
	backgroundColor?: keyof DefaultTheme['color']
	value?: boolean
	afterText?: string | React.ReactNode
	beforeText?: string | React.ReactNode
	styled?: CSSProp
	isIndeterminate?: boolean
	size?: 'small' | 'medium' | 'large'
	icon?: React.ReactNode
	gap?: Properties['gap']
}

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<TCheckbox>>((props, ref) => {
	const {
		afterText,
		backgroundColor,
		beforeText,
		styled,
		disabled,
		gap,
		icon,
		isIndeterminate,
		size,
		value,
		...rest
	} = props;
	return (
		<CheckboxContainer
			styled={styled}
			gap={gap}
			disabled={disabled}
		>
			{beforeText}
			<CheckboxInput
				ref={ref}
				checked={value}
				disabled={disabled}
				type="checkbox"
				{...rest}
			/>
			<CheckboxWrapper
				checked={value}
				backgroundColor={backgroundColor}
				size={size || 'medium'}
			>
				{!icon && (isIndeterminate ? (
					<CheckIcon
						fill="#F9F9F9"
						height="2"
						viewBox="0 0 14 2"
						width="14"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 .05a.95.95 0 1 0 0 1.9V.05Zm12 1.9a.95.95 0 0 0 0-1.9v1.9Zm-12 0h12V.05H1v1.9Z" />
					</CheckIcon>
				) : (
					<CheckIcon
						fill="#F9F9F9"
						height="9"
						viewBox="0 0 12 9"
						width="12"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10.02.296a.93.93 0 0 1 1.361 1.27L4.868 8.543a.93.93 0 0 1-1.286.072L.325 5.824a.93.93 0 0 1 1.211-1.413l2.58 2.211L10.02.296Z" />
					</CheckIcon>
				))}
				{icon}
			</CheckboxWrapper>
			{afterText}
		</CheckboxContainer>
	);
});

Checkbox.defaultProps = {
	backgroundColor: undefined,
	afterText: null,
	value: undefined,
	beforeText: null,
	styled: undefined,
	size: 'medium',
	isIndeterminate: false,
	icon: null,
	gap: '8px',
};

export default Checkbox;
