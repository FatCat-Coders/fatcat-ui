import React, { forwardRef, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	SwitchButton,
	SwitchContainer,
	SwitchWrapper,
	SwitchInput,
} from './Switch.atoms';

export type TSwitch = {
	backgroundColor?: keyof DefaultTheme['color']
	disabled?: boolean
	id?: string
	onChange: (e: boolean) => void
	required?: boolean
	useSameBackgroundColor?: boolean
	value: boolean
	beforeText?: string | React.ReactNode
	afterText?: string | React.ReactNode
	css?: CSSProp
}

const Switch = forwardRef<HTMLInputElement, PropsWithChildren<TSwitch>>((props, ref) => {
	const {
		backgroundColor,
		disabled,
		id,
		onChange,
		required,
		useSameBackgroundColor,
		value,
		beforeText,
		afterText,
		css,
		...rest
	} = props;
	return (
		<SwitchContainer css={css}>
			{beforeText}
			<SwitchInput
				id={id}
				ref={ref}
				checked={value}
				disabled={disabled}
				onChange={() => { onChange(!value); }}
				required={required}
				type="checkbox"
				{...rest}
			/>
			<SwitchWrapper
				checked={value}
				useSameBackgroundColor={useSameBackgroundColor}
				backgroundColor={backgroundColor}
				disabled={disabled}
			>
				<SwitchButton />
			</SwitchWrapper>
			{afterText}
		</SwitchContainer>

	);
});

Switch.defaultProps = {
	backgroundColor: null,
	disabled: false,
	id: undefined,
	required: false,
	useSameBackgroundColor: false,
	beforeText: null,
	afterText: null,
	css: null,
};

export default Switch;
