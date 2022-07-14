import React from 'react';

import { Wrapper } from '../../src/components/Atoms/Wrapper';
import { Flex as FlexOrigin } from '../../src/components/Atoms/Flex';

import readme from './Flex.md';

export default {
	title: 'Element Props/Flex',
	argTypes: {
		flex: { control: 'text', description: 'String with css property', type: 'string' },
		direction: { control: 'text', description: 'String with css property', type: 'string' },
		alignItems: { control: 'text', description: 'String with css property', type: 'string' },
		justifyContent: { control: 'text', description: 'String with css property', type: 'string' },
		flexBasis: { control: 'text', description: 'String with css property', type: 'string' },
		wrap: { control: 'boolean', description: 'Boolean value', type: { name: 'boolean' } },
		gap: { control: 'text', description: 'String with css property', type: 'string' },
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
};

const Template = ({ children, ...args }) => (
	<FlexOrigin {...args}>
		<Wrapper
			height="100px"
			width="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			height="100px"
			width="400px"
			backgroundColor="yellow"
		/>
		<Wrapper
			height="100px"
			width="200px"
			backgroundColor="yellow"
		/>
	</FlexOrigin>
);

export const Flex = Template.bind({});

Flex.parameters = {
	controls: {
		include: [
			'flex',
			'direction',
			'alignItems',
			'justifyContent',
			'flexBasis',
			'wrap',
			'gap',
		],
	},
};
Flex.args = {
	direction: 'column',
	gap: '20px',
	alignItems: 'center',
};
