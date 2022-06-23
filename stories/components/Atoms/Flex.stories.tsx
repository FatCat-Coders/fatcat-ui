import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex as FlexOrigin } from '../../../src/components/Atoms/Flex';

import readme from './Flex.md';

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
		$gap: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		$wrap: {
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
		{[...Array(parseInt(items, 10))].map(() => {
			const randomWidth = widths[Math.floor(Math.random() * widths.length)];
			return (
				<FlexOrigin
					$height="100px"
					$width={randomWidth}
					$backgroundColor="yellow"
					$alignItems="center"
					$justifyContent="center"
				>
					{randomWidth}
				</FlexOrigin>
			);
		})}
	</FlexOrigin>
);

export const Flex = Template.bind({});

Flex.parameters = {
	controls: {
		include: [
			'items',
			'$gap',
			'$wrap',
		],
	},
};

Flex.args = {
	items: '4',
	$gap: '8px 16px',
	$wrap: true,
};
