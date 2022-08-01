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

export const Input: React.FC<TInput> = (props) => {
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
				id={inputId}
				placeholder=" "
				errorMsg={errorMsg}
				customInput
			/>
			<Label htmlFor={inputId}>{placeholder}</Label>
			{errorMsg && (
				<Text
					display="block"
					textColor="warrning"
					position="absolute"
					bottom="0px"
					lineHeight="s100"
					fontSize="s12"
					css="padding: 4px 13px;"
				>
					{errorMsg}
				</Text>
			)}
		</Wrapper>
	);
};

Input.defaultProps = {
	id: null,
	placeholder: null,
	errorMsg: null,
};
