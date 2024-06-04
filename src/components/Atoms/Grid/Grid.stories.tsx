import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid as GridOrigin } from './Grid';
import { Center } from '../Center';

import readme from './Grid.md';
import { GAP } from '../../../theme/definitions/gap/gap';

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
			control: 'select',
			options: Object.keys(GAP),
			name: 'gap (default: 16px)',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},

		rowGap: {
			control: 'select',
			options: Object.keys(GAP),
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		grid: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridTemplateAreas: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridTemplateRows: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridAutoColumns: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridAutoFlow: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		gridAutoRows: {
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
			'rowGap',
			'grid',
			'gridTemplateAreas',
			'gridTemplateRows',
			'gridAutoColumns',
			'gridAutoFlow',
			'gridAutoRows',
		],
	},
};

Grid.args = {
	items: '4',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
};
