import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as SwitchOrigin } from './Switch'; // eslint-disable-line
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { COLOR } from '../../../theme/definitions';

import readme from './Switch.md';

export default {
	title: 'Basic Elements/Switch',
	component: SwitchOrigin,
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
			description: 'Disables the switch',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		id: {
			control: 'text',
			description: 'Unique id for the input element',
		},
		onChange: {
			description: 'Function to call when the switch is changed',
		},
		required: {
			control: 'boolean',
			description: 'Makes the input switch required',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		useSameBackgroundColor: {
			control: 'boolean',
			description: 'Use the same background color for both switch states',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
			},
		},
		value: {
			control: 'boolean',
			description: 'Value of the switch',
		},
		beforeText: {
			control: 'text',
			description: '`String` or `ReactElement` to display before the switch',
		},
		afterText: {
			control: 'text',
			description: '`String` or `ReactElement` to display after the switch',
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof SwitchOrigin>;

const Template: ComponentStory<typeof SwitchOrigin> = (props) => {
	const [value, setValue] = useState(props.value); // eslint-disable-line
	return (
		<Flex
			padding={['t64', 'b64', 'l24', 'r24']}
		>
			<SwitchOrigin
				{...props}
				onChange={(e) => { setValue(value => !value); }}
				value={value}
				aria-label="Switch"
			/>
		</Flex>
	);
};

export const Switch = Template.bind({});

Switch.parameters = {
	controls: {
		include: [
			'afterText',
			'backgroundColor',
			'beforeText',
			'css',
			'disabled',
			'id',
			'onChange',
			'required',
			'useSameBackgroundColor',
			'value',
		],
	},
};

Switch.args = {
	afterText: 'on',
	backgroundColor: 'primary',
	beforeText: 'off',
	css: undefined,
	disabled: false,
	id: undefined,
	onChange: undefined,
	required: false,
	useSameBackgroundColor: true,
	value: false,
};
