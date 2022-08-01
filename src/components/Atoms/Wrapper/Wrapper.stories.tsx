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
		width: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		minWidth: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		maxWidth: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		height: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		minHeight: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		maxHeight: {
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
					height="100px"
					width={randomWidth}
					backgroundColorHex={index % 2 === 0 ? 'orange' : 'green'}
					alignItems="center"
					justifyContent="center"
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
			'width',
			'minWidth',
			'maxWidth',
			'height',
			'minHeight',
			'maxHeight',
		],
	},
};

Wrapper.args = {
	items: '4',
};
