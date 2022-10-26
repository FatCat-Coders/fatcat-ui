import React, { forwardRef, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	CheckIcon,
	CheckboxContainer,
	CheckboxWrapper,
	CheckboxInput,
} from './Checkbox.atoms';

export type TCheckbox = {
	backgroundColor?: keyof DefaultTheme['color']
	disabled?: boolean
	id?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	value: boolean
	afterText?: string | React.ReactNode
	css?: CSSProp
	isIndeterminate?: boolean
	size?: 'small' | 'medium' | 'large'
	icon?: React.ReactNode
}

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<TCheckbox>>((props, ref) => {
	const {
		backgroundColor,
		disabled,
		id,
		icon,
		onChange,
		required,
		isIndeterminate,
		value,
		afterText,
		css,
		size,
		...rest
	} = props;
	return (
		<CheckboxContainer
			css={css}
			disabled={disabled}
		>
			<CheckboxInput
				id={id}
				ref={ref}
				checked={value}
				disabled={disabled}
				onChange={(e) => { onChange(e); }}
				required={required}
				type="checkbox"
				{...rest}
			/>
			<CheckboxWrapper
				checked={value}
				backgroundColor={backgroundColor}
				size={size}
			>
				{!icon && (isIndeterminate ? (
					<CheckIcon
						width="14"
						height="2"
						viewBox="0 0 14 2"
						fill="#F9F9F9"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 .05a.95.95 0 1 0 0 1.9V.05Zm12 1.9a.95.95 0 0 0 0-1.9v1.9Zm-12 0h12V.05H1v1.9Z" />
					</CheckIcon>
				) : (
					<CheckIcon
						width="12"
						height="9"
						viewBox="0 0 12 9"
						fill="#F9F9F9"
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
	disabled: false,
	id: undefined,
	required: false,
	afterText: null,
	css: undefined,
	size: 'medium',
	isIndeterminate: false,
	icon: null,
};

export default Checkbox;
