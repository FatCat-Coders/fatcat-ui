import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea as TextAreaOrigin } from './TextArea';
import { Flex } from '../Flex';
import { formatObjectKeys, showToastMsg } from '../../../../stories/helpers';
import { INPUT_VARIANT } from '../../../theme/definitions';

import readme from './TextArea.md';

export default {
	title: 'Basic Elements/Inputs',
	component: TextAreaOrigin,
	argTypes: {
		variant: {
			control: 'select',
			options: Object.keys(INPUT_VARIANT),
			description: `List of input variants: ${formatObjectKeys(INPUT_VARIANT)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'base' },
			},
		},
		onChange: {
			description: 'Function to call when the TextArea is changed',
			table: {
				type: { summary: null },
			},
		},
		rows: { control: 'number', description: 'Number of rows' },
		required: {
			control: 'boolean',
			description: 'Makes the TextArea required',
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
			description: 'TextArea value',
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
		errorMsg: {
			description: 'Error message',
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
} as ComponentMeta<typeof TextAreaOrigin>;

const Template: ComponentStory<typeof TextAreaOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
	const [value1, setValue1] = useState('Wrong input!');
	return (
		<Flex
			padding={['t64', 'b64', 'l24', 'r24']}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					showToastMsg('🦄 Form submitd!');
				}}
				style={{ width: '100%' }}
			>
				<TextAreaOrigin
					{...props}
					onChange={(e) => { setValue(e.target.value); }}
					value={value}
				/>
				<TextAreaOrigin
					value={value1}
					onChange={(e) => { setValue1(e.target.value); }}
					required
					rows={20}
					errorMsg="Custom error message!"
					placeholder="Custom placeholder"
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

export const TextArea = Template.bind({});

TextArea.parameters = {
	controls: {
		include: [
			'variant',
			'placeholder',
			'rows',
			'errorMsg',
			'value',
			'required',
			'onChange',
		],
	},
};
TextArea.args = {
	required: true,
	variant: 'base',
	rows: 20,
	placeholder: 'Placeholder',
	value: '',
};
