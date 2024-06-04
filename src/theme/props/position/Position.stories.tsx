import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';

import readme from './Position.md';

export default {
	title: 'Element Props/Position',
	argTypes: {
		position: { control: 'text', description: 'String with css property', type: 'string' },
		top: { control: 'text', description: 'String with css property', type: 'string' },
		right: { control: 'text', description: 'String with css property', type: 'string' },
		bottom: { control: 'text', description: 'String with css property', type: 'string' },
		left: { control: 'text', description: 'String with css property', type: 'string' },
		inset: { control: 'text', description: 'String with css property', type: 'string' },
		zIndex: { control: 'text', description: 'String with css property', type: 'string' },
		transform: { control: 'text', description: 'String with css property', type: 'string' },
		transformOrigin: { control: 'text', description: 'String with css property', type: 'string' },
		alignSelf: { control: 'text', description: 'String with css property', type: 'string' },
		order: { control: 'number', description: 'Number of an item (only inside flex)', type: 'number' },
		perspectiveOrigin: { control: 'text', description: 'String with css property', type: 'string' },
		perspective: { control: 'number', description: 'Number of an item (only inside flex)', type: 'number' },
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
		<Wrapper
			h="200px"
			w="200px"
			backgroundColor="primary600"
			{...args}
		>
			<Wrapper
				h="100px"
				w="100px"
				backgroundColor="backgroundLight"
				position="absolute"
				top="25%"
				left="75%"
			/>
		</Wrapper>
	);
}

export const Position = Template.bind({});

Position.parameters = {
	controls: {
		include: [
			'alignSelf',
			'bottom',
			'inset',
			'left',
			'order',
			'perspective',
			'perspectiveOrigin',
			'position',
			'right',
			'top',
			'transform',
			'transformOrigin',
			'zIndex',
		],
	},
};
Position.args = {
	position: 'relative',
};
