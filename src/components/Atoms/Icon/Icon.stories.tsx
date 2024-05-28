import { Meta, StoryObj } from '@storybook/react';

import { Icon as IconOrigin } from './Icon';
import { COLOR } from '../../../theme/definitions';

import readme from './Icon.md';

const meta:Meta<typeof IconOrigin> = {
	title: 'Basic Elements/Icon',
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
};

export default meta;

type Story= StoryObj<typeof IconOrigin>

export const Icon: Story = {
	args: {
		name: 'HelpCircle',
		size: '18',
		color: 'primary',
	},
	parameters: { controls: { include: ['name', 'size', 'color'] } },
};
