import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashedDivider as Divider } from '../../../src/components/Atoms/Divider';
import { Flex } from '../../../src/components/Atoms/Flex';
import { COLOR } from '../../../src/theme/definitions';
import { formatObjectKeys } from '../../helpers';

import readme from './Divider.md';

export default {
	title: 'Basic Elements/Divider',
	component: Divider,
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors: ${formatObjectKeys(COLOR)}`,
			type: 'string',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'black (#000)' },
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
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = ({ children, ...args }) => (
	<Flex
		padding={['t64', 'b64']}
	>
		<Divider {...args} />
	</Flex>
);

export const DashedDivider = Template.bind({});

DashedDivider.parameters = { controls: { include: ['color'] } };
DashedDivider.args = { color: 'purple' };
