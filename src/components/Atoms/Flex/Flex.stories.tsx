import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex as FlexOrigin } from './Flex';
import { Center } from '../Center';

import readme from './Flex.md';
import { GAP } from '../../../theme/definitions';

const widths = ['200px', '250px', '300px'];

export default {
	title: 'Basic Elements/Flex',
	component: FlexOrigin,
	argTypes: {
		items: {
			control: 'select',
			options: ['2', '3', '4', '5', '10', '15', '20'],
			description: '(Demo purposes only) Add children elelements to the grid ',
			type: 'string',
		},
		gap: {
			control: 'select',
			options: Object.keys(GAP),
			description: 'String with css property',
			type: 'string',
		},
		wrap: {
			control: 'boolean',
			description: 'String with css property',
			type: 'boolean',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
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
} as ComponentMeta<typeof FlexOrigin>;

const Template: ComponentStory<typeof FlexOrigin> = ({ children, items, ...args }) => (
	<FlexOrigin {...args}>
		{[...Array(parseInt(items, 10))].map((i, index) => {
			const randomWidth = widths[Math.floor(Math.random() * widths.length)];
			return (
				<Center
					key={index} // eslint-disable-line
					h="100px"
					w={randomWidth}
					backgroundColor="primary600"
				>
					{randomWidth}
				</Center>
			);
		})}
	</FlexOrigin>
);

export const Flex = Template.bind({});

Flex.parameters = {
	controls: {
		include: [
			'items',
			'gap',
			'wrap',
		],
	},
};

Flex.args = {
	items: '4',
	gap: 's2 s3',
	wrap: true,
};
