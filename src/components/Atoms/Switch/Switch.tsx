import React, { forwardRef, PropsWithChildren } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import {
	Switch,
	SwitchContainer,
	SwitchWrapper,
	SwitchInput,
} from './Switch.atoms';

export type TToggle = {
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

const Toggle = forwardRef<HTMLInputElement, PropsWithChildren<TToggle>>((props, ref) => {
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
			{beforeText}
			<SwitchWrapper
				checked={value}
				useSameBackgroundColor={useSameBackgroundColor}
				backgroundColor={backgroundColor}
				disabled={disabled}
			>
				<Switch />
			</SwitchWrapper>
			{afterText}
		</SwitchContainer>

	);
});

Toggle.defaultProps = {
	backgroundColor: null,
	disabled: false,
	id: undefined,
	required: false,
	useSameBackgroundColor: false,
	beforeText: null,
	afterText: null,
	css: null,
};

export default Toggle;
