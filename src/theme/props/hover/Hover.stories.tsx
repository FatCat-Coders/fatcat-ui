import React from 'react';

import { formatObjectKeys } from '../../../../stories/helpers';
import { Wrapper } from '../../../components/Atoms/Wrapper';
import { HOVER_BEHAVIORS } from '../../../theme/styles/hover';

import readme from './Hover.md';

export default {
	title: 'Element Props/Hover',
	argTypes: {
		hover: { control: 'array', description: `List of all hover behaviors: ${formatObjectKeys(HOVER_BEHAVIORS)} ` },
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
			backgroundColor="primary600"
			transition="all 0.3s ease"
			{...args}
		/>
	);
}

export const Hover = Template.bind({});

Hover.parameters = {
	controls: {
		include: [
			'hover',
		],
	},
};
Hover.args = {
	hover: [{ backgroundColorHex: '#1D1D1E', zoom: '1.2' }],
};
