import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';
import { Flex } from '../../../components/Atoms/Flex';
import { Text } from '../../../components/Atoms/Text';

import readme from './Overflow.md';

export default {
	title: 'Element Props/Overflow',
	argTypes: {
		overflow: { control: 'text', description: 'String with css property', type: 'string' },
		overflowX: { control: 'text', description: 'String with css property', type: 'string' },
		overflowY: { control: 'text', description: 'String with css property', type: 'string' },
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
		<Flex
			gap="40px"
		>
			<Flex gap="20px" direction="column" w="fit-content">
				<Text fontWeight="bold">{args.overflow ? args.overflow : 'Try it yourself!'}</Text>
				<Wrapper
					h="100px"
					w="100px"
					padding={['t12', 'r12', 'b12', 'l12']}
					backgroundColor="primary"
					{...args}
				>
					Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln&apos;s Inn Hall. Implacable November weather.
					As much mud in the streets as if the waters had but newly retired from the face of the earth.
				</Wrapper>
			</Flex>
			<Flex gap="20px" direction="column" w="fit-content">
				<Text fontWeight="bold">hidden</Text>
				<Wrapper
					h="100px"
					w="100px"
					padding={['t12', 'r12', 'b12', 'l12']}
					backgroundColor="primary"
					overflow="hidden"
				>
					Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln&apos;s Inn Hall. Implacable November weather.
					As much mud in the streets as if the waters had but newly retired from the face of the earth.
				</Wrapper>
			</Flex>
			<Flex gap="20px" direction="column" w="fit-content">
				<Text fontWeight="bold">visible</Text>
				<Wrapper
					h="100px"
					w="100px"
					padding={['t12', 'r12', 'b12', 'l12']}
					backgroundColor="primary"
					overflow="visible"
				>
					Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln&apos;s Inn Hall. Implacable November weather.
					As much mud in the streets as if the waters had but newly retired from the face of the earth.
				</Wrapper>
			</Flex>
		</Flex>
	);
}

export const Overflow = Template.bind({});

Overflow.parameters = {
	controls: {
		include: [
			'overflow',
			'overflowX',
			'overflowY',
		],
	},
};
Overflow.args = {
	overflow: 'auto',
};
