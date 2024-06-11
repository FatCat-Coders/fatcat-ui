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

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTextArea>((props, ref) => {
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
				ref={ref}
				id={inputId}
				placeholder=" "
				// TODO: fix this when fixing types
				// errorMsg={errorMsg}
				// customInput
			/>
			<Label htmlFor={inputId}>{placeholder}</Label>
			{errorMsg && (
				<Text
					display="block"
					textColor="warningMedium"
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

TextArea.defaultProps = {
	id: undefined,
	placeholder: undefined,
	errorMsg: undefined,
};
