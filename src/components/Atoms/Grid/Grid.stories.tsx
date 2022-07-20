import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid as GridOrigin } from './Grid';
import { Flex } from '../Flex';

import readme from './Grid.md';

const widths = ['200px', '250px', '300px'];

export default {
	title: 'Basic Elements/Grid',
	component: GridOrigin,
	argTypes: {
		items: {
			control: 'select',
			options: ['2', '3', '4', '5', '10', '15', '20'],
			description: '(Demo purposes only) Add children elelements to the grid ',
			type: 'string',
		},
		alignItems: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		justifyContent: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		justifyItems: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridTemplateColumns: {
			control: 'text',
			description: 'String with css property',
			type: { name: 'string', required: true },
			table: {
				type: { summary: null },
			},
		},
		gap: {
			name: 'gap (default: 16px)',
			control: 'text',
			description: 'String with css property',
			type: 'string',
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
} as ComponentMeta<typeof GridOrigin>;

const Template: ComponentStory<typeof GridOrigin> = ({ children, items, ...args }) => (
	<GridOrigin {...args}>
		{[...Array(parseInt(items, 10))].map(() => {
			const randomWidth = widths[Math.floor(Math.random() * widths.length)];
			return (
				<Flex
					height="100px"
					width={randomWidth}
					backgroundColor="yellow"
					alignItems="center"
					justifyContent="center"
				>
					{randomWidth}
				</Flex>
			);
		})}
	</GridOrigin>
);

export const Grid = Template.bind({});

Grid.parameters = {
	controls: {
		include: [
			'items',
			'alignItems',
			'justifyContent',
			'justifyItems',
			'gridTemplateColumns',
			'gap (default: 16px)',
		],
	},
};

Grid.args = {
	items: '4',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
};
