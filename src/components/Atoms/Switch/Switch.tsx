import React, { forwardRef, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	SwitchButton,
	SwitchContainer,
	SwitchWrapper,
	SwitchInput,
	SwitchText,
} from './Switch.atoms';

export type TSwitch = {
	backgroundColor?: keyof DefaultTheme['color']
	textColor?: keyof DefaultTheme['textColor']
	disabled?: boolean
	id?: string
	onChange: (e: boolean) => void
	required?: boolean
	useSameBackgroundColor?: boolean
	value: boolean
	beforeText?: string | React.ReactNode
	afterText?: string | React.ReactNode
	styled?: CSSProp
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
		styled,
		textColor,
		...rest
	} = props;
	return (
		<SwitchContainer styled={styled}>
			{beforeText && (<SwitchText selected={!value} textColor={textColor}>{beforeText}</SwitchText>)}
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
			{afterText && (<SwitchText selected={!!value} textColor={textColor}>{afterText}</SwitchText>)}
		</SwitchContainer>

	);
});

Switch.defaultProps = {
	backgroundColor: undefined,
	textColor: 'primary',
	disabled: false,
	id: undefined,
	required: false,
	useSameBackgroundColor: false,
	beforeText: null,
	afterText: null,
	styled: undefined,
};

export default Switch;
