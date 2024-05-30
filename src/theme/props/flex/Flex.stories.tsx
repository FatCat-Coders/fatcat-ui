import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';
import { Flex as FlexOrigin } from '../../../components/Atoms/Flex';

import readme from './Flex.md';
import { GAP } from '../../../theme/definitions/gap/gap';

export default {
	title: 'Element Props/Flex',
	argTypes: {
		flex: { control: 'text', description: 'String with css property', type: 'string' },
		direction: { control: 'text', description: 'String with css property', type: 'string' },
		alignItems: { control: 'text', description: 'String with css property', type: 'string' },
		justifyContent: { control: 'text', description: 'String with css property', type: 'string' },
		flexBasis: { control: 'text', description: 'String with css property', type: 'string' },
		flexWrap: { control: 'text', description: 'String with css property', type: 'string' },
		wrap: { control: 'boolean', description: 'Boolean value', type: { name: 'boolean' } },
		gap: {
			control: 'select',
			options: Object.keys(GAP),
			description: 'String with css property',
			type: 'string',
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

function Template({ children, ...args }) {
	return (
		<FlexOrigin {...args}>
			<Wrapper
				h="100px"
				w="100px"
				backgroundColor="yellow"
			/>
			<Wrapper
				h="100px"
				w="400px"
				backgroundColor="yellow"
			/>
			<Wrapper
				h="100px"
				w="200px"
				backgroundColor="yellow"
			/>
		</FlexOrigin>
	);
}

export const Flex = Template.bind({});

Flex.parameters = {
	controls: {
		include: [
			'flex',
			'direction',
			'alignItems',
			'justifyContent',
			'flexBasis',
			'flexWrap',
			'wrap',
			'gap',
		],
	},
};
Flex.args = {
	direction: 'column',
	gap: 'g20',
	alignItems: 'center',
};
