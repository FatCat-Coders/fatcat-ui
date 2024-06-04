import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';
import { Text } from '../../../components/Atoms/Text';

import readme from './Size.md';

export default {
	title: 'Element Props/Size',
	argTypes: {
		w: { control: 'text', description: 'String with css property', type: 'string' },
		maxW: { control: 'text', description: 'String with css property', type: 'string' },
		minW: { control: 'text', description: 'String with css property', type: 'string' },
		h: { control: 'text', description: 'String with css property', type: 'string' },
		maxH: { control: 'text', description: 'String with css property', type: 'string' },
		minH: { control: 'text', description: 'String with css property', type: 'string' },
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
			position="relative"
			backgroundColor="primary600"
			{...args}
		>
			<Text
				position="absolute"
				top="-20px"
				left="50%"
				transform="translateX(-50%)"
			>
				{args.w}
			</Text>
			<Text
				position="absolute"
				top="50%"
				right="-30px"
				transform="translateY(-50%) rotate(90deg)"
			>
				{args.h}
			</Text>
		</Wrapper>
	);
}

export const Size = Template.bind({});

Size.parameters = {
	controls: {
		include: [
			'w',
			'maxW',
			'minW',
			'h',
			'maxH',
			'minH',
		],
	},
};
Size.args = {
	w: '100px',
	h: '100px',
};
