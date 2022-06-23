import React from 'react';

import { formatObjectKeys } from '../helpers';
import { Wrapper } from '../../src/components/Atoms/Wrapper';
import { HOVER_BEHAVIORS } from '../../src/theme/styles/hover';

import readme from './Hover.md';

export default {
	title: 'Element Props/Hover',
	argTypes: {
		$hover: { control: 'array', description: `List of all hover behaviors: ${formatObjectKeys(HOVER_BEHAVIORS)} ` },
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
		$transition="all 0.3s ease"
		{...args}
	/>
);

export const Hover = Template.bind({});

Hover.parameters = {
	controls: {
		include: [
			'$hover',
		],
	},
};
Hover.args = {
	$hover: ['backgroundBlackLighter', { zoom: '1.2' }],
};
