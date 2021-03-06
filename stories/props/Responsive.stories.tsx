import React from 'react';

import { Flex } from '../../src/components/Atoms/Flex';
import { Wrapper } from '../../src/components/Atoms/Wrapper';

import readme from './Responsive.md';

export default {
	title: 'Element Props/Responsive',
	argTypes: {
		mobile: { control: 'array' },
		tablet: { control: 'array' },
		largeTablet: { control: 'array' },
		desktop: { control: 'array' },
		largeDesktop: { control: 'array' },
		desktopStandard: { control: 'array' },
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
			height="100px"
			width="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			height="100px"
			width="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			height="100px"
			width="100px"
			backgroundColor="yellow"
		/>
		<Wrapper
			height="100px"
			width="100px"
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
			'desktopStandard',
		],
	},
};
Responsive.args = {
	mobile: ['column', { padding: ['t12', 'r12', 'b12', 'l12'] }],
};
