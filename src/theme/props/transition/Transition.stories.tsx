import React from 'react';

import { Center } from '../../../components/Atoms/Center';
import { Text } from '../../../components/Atoms/Text';

import readme from './Transition.md';

export default {
	title: 'Element Props/Transition',
	argTypes: {
		transition: { control: 'text', description: 'String with css property', type: 'string' },
		transitionDelay: { control: 'text', description: 'String with css property', type: 'string' },
		transitionDuration: { control: 'text', description: 'String with css property', type: 'string' },
		transitionProperty: { control: 'text', description: 'String with css property', type: 'string' },
		transitionTimingFunction: { control: 'text', description: 'String with css property', type: 'string' },
		willChange: { control: 'text', description: 'String with css property', type: 'string' },
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
	<Center
		backgroundColor="yellow"
		width="200px"
		height="200px"
		hover={[{ backgroundColorHex: '#1D1D1E' }]}
		{...args}
	>
		<Text textColor="primary">Hover me!</Text>
	</Center>
);

export const Transition = Template.bind({});

Transition.parameters = {
	controls: {
		include: [
			'transition',
			'transitionDelay',
			'transitionDuration',
			'transitionProperty',
			'transitionTimingFunction',
			'willChange',
		],
	},
};
Transition.args = {
	transition: 'background-color 300ms ease-in-out',
};
