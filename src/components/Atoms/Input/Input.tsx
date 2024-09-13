import React, { useId } from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from '../Text';
import { InputField, TInputField } from './InputField';
import { Label } from '../Label';

export type TInput =
	{
		id?: string
		placeholder?: string
		errorMsg?: string
	}
	& TInputField
	& React.InputHTMLAttributes<HTMLInputElement>;

// @TODO: fix commented props when types are fixed
export const Input = React.forwardRef<HTMLInputElement, TInput>((props, ref) => {
	const {
		id,
		placeholder,
		errorMsg,
		...restProps
	} = props;
	const generatedId = useId();
	const inputId = id || generatedId;
	return (
		<Wrapper
			position="relative"
		>
			<InputField
				{...restProps}
				ref={ref}
				id={inputId}
				placeholder=" "
				// errorMsg={errorMsg}
				aria-invalid={errorMsg ? 'true' : 'false'}
				// customInput
			/>
			<Label htmlFor={inputId}>{placeholder}</Label>
			{errorMsg && (
				<Text
					role="alert"
					display="block"
					// textColor="warningMedium"
					position="absolute"
					bottom="0px"
					lineHeight="s100"
					fontSize="s11"
					styled="padding: 4px 13px;"
				>
					{errorMsg}
				</Text>
			)}
		</Wrapper>
	);
});

Input.defaultProps = {
	id: undefined,
	placeholder: undefined,
	errorMsg: undefined,
};
