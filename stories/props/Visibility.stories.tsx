import React from 'react';

import { formatObjectKeys } from '../helpers';
import { MEDIA } from '../../src/theme/definitions';

import { Wrapper } from '../../src/components/Atoms/Wrapper';

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
		height="100px"
		width="100px"
		backgroundColor="yellow"
		{...args}
	/>
);

export const Visibility = Template.bind({});

Visibility.parameters = {
	controls: {
		include: [
			'show',
			'hide',
			'visibility',
			'initialDisplay',
			'display',
			'opacity',
		],
	},
};
Visibility.args = {
	opacity: '0.5',
	hide: 'mobile',
};
