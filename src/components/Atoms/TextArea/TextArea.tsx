import React, { useId } from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from '../Text';
import { TextAreaField, TTextAreaField } from './TextAreaField';
import { Label } from '../Label';

export type TTextArea =
	{
		id?: string
		placeholder?: string
		errorMsg?: string
	}
	& TTextAreaField
	& React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<TTextArea> = (props) => {
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
			<TextAreaField
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

TextArea.defaultProps = {
	id: undefined,
	placeholder: undefined,
	errorMsg: undefined,
};
