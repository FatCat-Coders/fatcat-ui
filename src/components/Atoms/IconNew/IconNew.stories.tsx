import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNew as IconOrigin } from './IconNew';
import { COLOR } from '../../../theme/definitions';

import readme from './IconNew.md';

export default {
	title: 'Basic Elements/IconNew',
	component: IconOrigin,
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'SVG default color',
			type: { name: 'string' },
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
} as ComponentMeta<typeof IconOrigin>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof IconOrigin> = ({ ...args }) => (
	<IconOrigin {...args} />
);

export const IconNew = Template.bind({});

IconNew.parameters = { controls: { include: ['name', 'size', 'color'] } };
IconNew.args = {
	name: 'HelpCircle',
	size: 18,
	color: 'primary',
};
