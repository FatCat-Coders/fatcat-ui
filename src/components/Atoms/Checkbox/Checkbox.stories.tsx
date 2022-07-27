import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as CheckboxOrigin } from './Checkbox'; // eslint-disable-line
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { COLOR } from '../../../theme/definitions';
import { sizing } from './Checkbox.atoms';

import readme from './Checkbox.md';

export default {
	title: 'Basic Elements/Checkbox',
	component: CheckboxOrigin,
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of background colors: ${formatObjectKeys(COLOR)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'primary' },
			},
		},
		css: {
			control: 'text',
			description: 'Additional custom CSS style',
			table: {
				type: { summary: null },
			},
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the Checkbox',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		id: {
			control: 'text',
			description: 'Unique id for the input element',
			table: {
				type: { summary: null },
			},
		},
		onChange: {
			description: 'Function to call when the Checkbox is changed',
			table: {
				type: { summary: null },
			},
		},
		required: {
			control: 'boolean',
			description: 'Makes the input Checkbox required',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		size: {
			control: 'select',
			options: Object.keys(sizing),
			description: `List of checkbox sizes: ${formatObjectKeys(sizing)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'medium' },
			},
		},
		value: {
			control: 'boolean',
			description: 'Value of the Checkbox',
			table: {
				type: { summary: null },
			},
		},
		isIndeterminate: {
			control: 'boolean',
			description: 'When checkbox is indeterminate',
			table: {
				type: { summary: null },
			},
		},
		afterText: {
			control: 'text',
			description: '`String` or `ReactElement` to display after the Checkbox',
			table: {
				type: { summary: null },
			},
		},
		icon: {
			control: 'text',
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof CheckboxOrigin>;

const Template: ComponentStory<typeof CheckboxOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
	const [star, setStar] = useState(false);
	return (
		<Flex
			padding={['t64', 'b64', 'l24', 'r24']}
			direction="column"
			gap="16px"
		>
			<CheckboxOrigin
				{...props}
				onChange={() => setValue(value => !value)}
				value={value}
				aria-label="Checkbox"
			/>
			<CheckboxOrigin
				{...props}
				onChange={() => setStar(value => !value)}
				value={star}
				aria-label="Checkbox Star"
				icon={(
					<svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						{/* eslint-disable */}
						<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
						{/* eslint-enable */}
					</svg>
				)}
			/>

		</Flex>
	);
};

export const Checkbox = Template.bind({});

Checkbox.parameters = {
	controls: {
		include: [
			'afterText',
			'backgroundColor',
			'css',
			'disabled',
			'id',
			'isIndeterminate',
			'onChange',
			'required',
			'size',
			'value',
			'icon',
		],
	},
};

Checkbox.args = {
	afterText: 'Checkbox',
	backgroundColor: 'primary',
	css: undefined,
	disabled: false,
	id: undefined,
	isIndeterminate: false,
	onChange: undefined,
	required: false,
	size: 'medium',
	value: false,
};
