import React from 'react';

import { formatObjectKeys } from '../../../../stories/helpers';
import { MEDIA } from '../../../theme/definitions';

import { Wrapper } from '../../../components/Atoms/Wrapper';

import readme from './Visibility.md';

export default {
	title: 'Element Props/Visibility',
	argTypes: {
		show: {
			type: 'string',
			control: 'select',
			options: Object.keys(MEDIA),
			description: `List of breakpoints: ${formatObjectKeys(MEDIA)}, also we need to pass \`initialDisplay\``,
			table: {
				type: { summary: null },
			},
		},
		hide: {
			type: 'string',
			control: 'select',
			options: Object.keys(MEDIA),
			description: `List of breakpoints: ${formatObjectKeys(MEDIA)}`,
			table: {
				type: { summary: null },
			},
		},
		visibility: { control: 'text', description: 'String with css property', type: 'string' },
		initialDisplay: { control: 'text', description: 'String with css property', type: 'string' },
		display: { control: 'text', description: 'String with css property', type: 'string' },
		opacity: { control: 'text', description: 'String with css property', type: 'string' },
		pointerEvents: { control: 'text', description: 'String with css property', type: 'string' },
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

export const Visibility = Template.bind({});

Visibility.parameters = {
	controls: {
		include: [
			'display',
			'hide',
			'initialDisplay',
			'opacity',
			'pointerEvents',
			'show',
			'visibility',
		],
	},
};
Visibility.args = {
	opacity: '0.5',
	hide: 'mobile',
};
