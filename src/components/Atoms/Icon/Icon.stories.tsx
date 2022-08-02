import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon as IconOrigin } from './Icon';
import { Wrapper } from '../Wrapper';
import { COLOR } from '../../../theme/definitions';

import readme from './Icon.md';

export default {
	title: 'Basic Elements/Icon',
	component: IconOrigin,
	argTypes: {
		svgColor: {
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

const Template: ComponentStory<typeof IconOrigin> = ({ ...args }) => (
	<Wrapper
		padding={['t64', 'b64', 'l24', 'r24']}
	>
		<IconOrigin {...args} />
		<IconOrigin />
	</Wrapper>

);

export const Icon = Template.bind({});

Icon.parameters = { controls: { include: [] } };
Icon.args = {
	svgColor: 'primary',
};
