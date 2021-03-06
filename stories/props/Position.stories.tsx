import React from 'react';

import { Wrapper } from '../../src/components/Atoms/Wrapper';

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
		alignSelf: { control: 'text', description: 'String with css property', type: 'string' },
		order: { control: 'number', description: 'Number of an item (only inside flex)', type: 'number' },
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
	<Wrapper
		height="200px"
		width="200px"
		backgroundColor="yellow"
		{...args}
	>
		<Wrapper
			height="100px"
			width="100px"
			backgroundColor="backgroundLight"
			position="absolute"
			top="25%"
			left="75%"
		/>
	</Wrapper>
);

export const Position = Template.bind({});

Position.parameters = {
	controls: {
		include: [
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'inset',
			'zIndex',
			'transform',
			'alignSelf',
			'order',
		],
	},
};
Position.args = {
	position: 'relative',
};
