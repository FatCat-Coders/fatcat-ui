import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input as InputOrigin } from './Input';
import { Flex } from '../Flex';
import { formatObjectKeys, showToastMsg } from '../../../../stories/helpers';
import { INPUT_STYLE } from '../../../theme/definitions';

import readme from './Input.md';

export default {
	title: 'Basic Elements/Inputs',
	component: InputOrigin,
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
} as ComponentMeta<typeof InputOrigin>;

const Template: ComponentStory<typeof InputOrigin> = (props) => {
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
				<InputOrigin
					{...props}
					onChange={(e) => { setValue(e.target.value); }}
					value={value}
				/>
				<InputOrigin
					value={value1}
					onChange={(e) => { setValue1(e.target.value); }}
					required
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

export const Input = Template.bind({});

Input.parameters = {
	controls: {
		include: [
			'variant',
			'placeholder',
			'errorMsg',
			'value',
			'required',
			'onChange',
		],
	},
};
Input.args = {
	required: true,
	variant: 'base',
	placeholder: 'Placeholder',
};
