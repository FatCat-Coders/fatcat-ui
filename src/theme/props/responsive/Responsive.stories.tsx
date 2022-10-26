import React from 'react';

import { Flex } from '../../../components/Atoms/Flex';
import { Wrapper } from '../../../components/Atoms/Wrapper';

import readme from './Responsive.md';

export default {
	title: 'Element Props/Responsive',
	argTypes: {
		mobile: { control: 'array' },
		tablet: { control: 'array' },
		largeTablet: { control: 'array' },
		desktop: { control: 'array' },
		largeDesktop: { control: 'array' },
		standardDesktop: { control: 'array' },
		wideDesktop: { control: 'array' },
		noHover: { control: 'array' },
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
	<Flex
		gap="10px"
		{...args}
	>
		<Wrapper
			h="100px"
			w="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			h="100px"
			w="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			h="100px"
			w="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			h="100px"
			w="100px"
			backgroundColor="yellow"
		/>
	</Flex>
);

export const Responsive = Template.bind({});

Responsive.parameters = {
	controls: {
		include: [
			'mobile',
			'tablet',
			'largeTablet',
			'desktop',
			'largeDesktop',
			'standardDesktop',
			'wideDesktop',
			'noHover',
		],
	},
};
Responsive.args = {
	tablet: ['column', { padding: ['t12', 'r12', 'b12', 'l12'] }],
};
