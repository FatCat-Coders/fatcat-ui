import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Wrapper as WrapperOrigin } from './Wrapper';

import readme from './Wrapper.md';

const widths = ['200px', '250px', '300px'];

export default {
	title: 'Basic Elements/Wrapper',
	component: WrapperOrigin,
	argTypes: {
		items: {
			control: 'select',
			options: ['2', '3', '4', '5', '10', '15', '20'],
			description: '(Demo purposes only) Add children elelements to the grid ',
			type: 'string',
		},
		w: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		minW: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		maxW: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		h: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		minH: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		maxH: {
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
} as ComponentMeta<typeof WrapperOrigin>;

const Template: ComponentStory<typeof WrapperOrigin> = ({ children, items, ...args }) => (
	<WrapperOrigin {...args}>
		{[...Array(parseInt(items, 10))].map((i, index) => {
			const randomWidth = widths[Math.floor(Math.random() * widths.length)];
			return (
				<WrapperOrigin
					key={index} // eslint-disable-line
					h="100px"
					w={randomWidth}
					backgroundColorHex={index % 2 === 0 ? 'primary' : 'neutrals800'}
				>
					{randomWidth}
				</WrapperOrigin>
			);
		})}
	</WrapperOrigin>
);

export const Wrapper = Template.bind({});

Wrapper.parameters = {
	controls: {
		include: [
			'items',
			'w',
			'minW',
			'maxW',
			'h',
			'minH',
			'maxH',
		],
	},
};

Wrapper.args = {
	items: '4',
};
