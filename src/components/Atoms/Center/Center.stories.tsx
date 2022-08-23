import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Center as CenterOrigin } from './Center';

import readme from './Center.md';

export default {
	title: 'Basic Elements/Center',
	component: CenterOrigin,
	argTypes: {
		gap: {
			control: 'text',
			description: 'String with css property',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		width: {
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
} as ComponentMeta<typeof CenterOrigin>;

const Template: ComponentStory<typeof CenterOrigin> = ({ children, items, ...args }) => (
	<CenterOrigin {...args}>
		This text is centered!
	</CenterOrigin>
);

export const Center = Template.bind({});

Center.parameters = {
	controls: {
		include: [
			'gap',
			'wrap',
			'width',
			'height',
		],
	},
};

Center.args = {
	gap: '8px 16px',
	height: '200px',
	width: '100%',
	wrap: true,
};
