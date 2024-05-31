import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';

import readme from './Border.md';

export default {
	title: 'Element Props/Border',
	argTypes: {
		border: { control: 'array', description: 'String with css property', type: 'string' },
		borderTop: { control: 'text', description: 'String with css property', type: 'string' },
		borderRight: { control: 'text', description: 'String with css property', type: 'string' },
		borderBottom: { control: 'text', description: 'String with css property', type: 'string' },
		borderLeft: { control: 'text', description: 'String with css property', type: 'string' },
		borderRadius: { control: 'text', description: 'String with css property', type: 'string' },
		boxShadow: { control: 'text', description: 'String with css property', type: 'string' },
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
			h="100px"
			w="100px"
			backgroundColor="primary"
			{...args}
		/>
	);
}

export const Border = Template.bind({});

Border.parameters = {
	controls: {
		include: [
			'border',
			'borderTop',
			'borderRight',
			'borderBottom',
			'borderLeft',
			'borderRadius',
			'boxShadow',
		],
	},
};
Border.args = {
	border: '4px solid black',
	borderRadius: '50%',
	boxShadow: '0 0 10px black',
};
