import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField as InputFieldOrigin } from './InputField';
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { INPUT_STYLE } from '../../../theme/definitions';

import readme from './InputField.md';

export default {
	title: 'Basic Elements/Inputs',
	component: InputFieldOrigin,
	argTypes: {
		variant: {
			control: 'select',
			options: Object.keys(INPUT_STYLE),
			description: `List of input variants: ${formatObjectKeys(INPUT_STYLE)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'base' },
			},
		},
		onChange: {
			description: 'Function to call when the Input is changed',
			table: {
				type: { summary: null },
			},
		},
		required: {
			control: 'boolean',
			description: 'Makes the Input required',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		placeholder: {
			description: 'Placeholder text',
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
		value: {
			description: 'Input value',
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof InputFieldOrigin>;

const Template: ComponentStory<typeof InputFieldOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
	return (
		<Flex
			padding={['t64', 'b64', 'l24', 'r24']}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log('submitd!'); // eslint-disable-line
				}}
				style={{ width: '100%' }}
			>
				<InputFieldOrigin
					{...props}
					onChange={(e) => { setValue(e.target.value); }}
					value={value}
				/>
				<button
					type="submit"
					style={{ position: 'absolute', left: '-9999px' }}
				>
					submit
				</button>
			</form>
		</Flex>
	);
};

export const InputField = Template.bind({});

InputField.parameters = {
	controls: {
		include: [
			'variant',
			'placeholder',
			'value',
			'required',
			'onChange',
		],
	},
};
InputField.args = {
	required: true,
	variant: 'base',
	placeholder: 'Placeholder',
};
