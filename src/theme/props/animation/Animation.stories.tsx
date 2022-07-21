import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';
import { ANIMATIONS } from '../../../theme/definitions';

import { formatObjectKeys } from '../../../../stories/helpers';

import readme from './Animation.md';

export default {
	title: 'Element Props/Animation',
	argTypes: {
		animation: { control: 'array', description: 'Array with two string items, first with animation name and second with animation setting' },
		animationName: {
			control: 'select',
			options: Object.keys(ANIMATIONS),
			description: `List of animations: ${formatObjectKeys(ANIMATIONS)}`,
			table: {
				type: { summary: null },
			},
		},
		animationDuration: { control: 'text', description: 'String with css property', type: 'string' },
		animationTimingFunction: { control: 'text', description: 'String with css property', type: 'string' },
		animationDelay: { control: 'text', description: 'String with css property', type: 'string' },
		animationIterationCount: { control: 'text', description: 'String with css property', type: 'string' },
		animationFillMode: { control: 'text', description: 'String with css property', type: 'string' },
		animationPlayState: { control: 'text', description: 'String with css property', type: 'string' },
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

export const Animation = Template.bind({});

Animation.parameters = {
	controls: {
		include: [
			'animation',
			'animationName',
			'animationDuration',
			'animationTimingFunction',
			'animationDelay',
			'animationIterationCount',
			'animationFillMode',
			'animationPlayState',
		],
	},
};
Animation.args = { animation: ['fadeInRight25', '2s linear 2s infinite'] };
