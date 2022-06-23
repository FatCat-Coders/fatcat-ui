import React from 'react';

import { Wrapper } from '../../src/components/Atoms/Wrapper';

import readme from './Border.md';

export default {
	title: 'Element Props/Border',
	argTypes: {
		$border: { control: 'array', description: 'String with css property', type: 'string' },
		$borderTop: { control: 'text', description: 'String with css property', type: 'string' },
		$borderRight: { control: 'text', description: 'String with css property', type: 'string' },
		$borderBottom: { control: 'text', description: 'String with css property', type: 'string' },
		$borderLeft: { control: 'text', description: 'String with css property', type: 'string' },
		$borderRadius: { control: 'text', description: 'String with css property', type: 'string' },
		$boxShadow: { control: 'text', description: 'String with css property', type: 'string' },
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
		$height="100px"
		$width="100px"
		$backgroundColor="yellow"
		{...args}
	/>
);

export const Border = Template.bind({});

Border.parameters = {
	controls: {
		include: [
			'$border',
			'$borderTop',
			'$borderRight',
			'$borderBottom',
			'$borderLeft',
			'$borderRadius',
			'$boxShadow',
		],
	},
};
Border.args = {
	$border: '4px solid black',
	$borderRadius: '50%',
	$boxShadow: '0 0 10px black',
};
