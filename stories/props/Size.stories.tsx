import React from 'react';

import { Wrapper } from '../../src/components/Atoms/Wrapper';
import { Text } from '../../src/components/Atoms/Text';

import readme from './Size.md';

export default {
	title: 'Element Props/Size',
	argTypes: {
		$width: { control: 'text', description: 'String with css property', type: 'string' },
		$maxWidth: { control: 'text', description: 'String with css property', type: 'string' },
		$minWidth: { control: 'text', description: 'String with css property', type: 'string' },
		$height: { control: 'text', description: 'String with css property', type: 'string' },
		$maxHeight: { control: 'text', description: 'String with css property', type: 'string' },
		$minHeight: { control: 'text', description: 'String with css property', type: 'string' },
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
		$position="relative"
		$backgroundColor="yellow"
		{...args}
	>
		<Text
			$position="absolute"
			$top="-20px"
			$left="50%"
			$transform="translateX(-50%)"
		>
			{args.$width}
		</Text>
		<Text
			$position="absolute"
			$top="50%"
			$right="-30px"
			$transform="translateY(-50%) rotate(90deg)"
		>
			{args.$height}
		</Text>
	</Wrapper>
);

export const Size = Template.bind({});

Size.parameters = {
	controls: {
		include: [
			'$width',
			'$maxWidth',
			'$minWidth',
			'$height',
			'$maxHeight',
			'$minHeight',
		],
	},
};
Size.args = {
	$width: '100px',
	$height: '100px',
};
