import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as CheckboxOrigin } from './Checkbox'; // eslint-disable-line
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { COLOR, GAP } from '../../../theme/definitions';
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
				defaultValue: { summary: 'primary600' },
			},
		},
		styled: {
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
		beforeText: {
			control: 'text',
			description: '`String` or `ReactElement` to display before the Checkbox',
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
		gap: {
			control: 'select', options: Object.keys(GAP), description: 'String with css property in format g[number]', type: 'string',
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

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof CheckboxOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
	const [star, setStar] = useState(false);
	return (
		<Flex
			direction="column"
			gap="16px"
			padding={['t64', 'b64', 'l24', 'r24']}
		>
			<CheckboxOrigin
				{...props}
				aria-label="Checkbox"
				onChange={() => setValue(value => !value)}
				value={value}
			/>
			<CheckboxOrigin
				{...props}
				aria-label="Checkbox Star"
				onChange={() => setStar(value => !value)}
				value={star}
				icon={(
					<svg
						fill="#fff"
						height="1em"
						stroke="currentColor"
						strokeWidth="0"
						viewBox="0 0 1024 1024"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
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
			'beforeText',
			'styled',
			'disabled',
			'gap',
			'icon',
			'id',
			'isIndeterminate',
			'onChange',
			'required',
			'size',
			'value',
		],
	},
};

Checkbox.args = {
	afterText: 'Checkbox',
	backgroundColor: 'primary600',
	disabled: false,
	isIndeterminate: false,
	required: false,
	size: 'medium',
	value: false,
};
