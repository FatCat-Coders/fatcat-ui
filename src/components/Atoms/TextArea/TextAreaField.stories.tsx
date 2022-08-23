import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextAreaField as TextAreaFieldOrigin } from './TextAreaField';
import { Flex } from '../Flex';
import { formatObjectKeys, showToastMsg } from '../../../../stories/helpers';
import { INPUT_STYLE } from '../../../theme/definitions';

import readme from './TextAreaField.md';

export default {
	title: 'Basic Elements/Inputs',
	component: TextAreaFieldOrigin,
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
			description: 'Function to call when the TextAreaField is changed',
			table: {
				type: { summary: null },
			},
		},
		rows: { control: 'number', description: 'Number of rows' },
		required: {
			control: 'boolean',
			description: 'Makes the TextAreaField required',
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
			description: 'TextAreaField value',
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
} as ComponentMeta<typeof TextAreaFieldOrigin>;

const Template: ComponentStory<typeof TextAreaFieldOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
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
				<TextAreaFieldOrigin
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

export const TextAreaField = Template.bind({});

TextAreaField.parameters = {
	controls: {
		include: [
			'variant',
			'placeholder',
			'rows',
			'value',
			'required',
			'onChange',
		],
	},
};
TextAreaField.args = {
	required: true,
	variant: 'base',
	rows: 20,
	placeholder: 'Placeholder',
	value: '',
};
