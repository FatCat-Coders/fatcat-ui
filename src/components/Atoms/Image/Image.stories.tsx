import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image as ImageOrigin } from './Image';
import { Flex } from '../Flex';

import img from '../../../../stories/assets/canteen.jpeg';

import readme from './Image.md';

export default {
	title: 'Basic Elements/Image',
	component: ImageOrigin,
	argTypes: {
		width: {
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
		height: {
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof ImageOrigin>;

const Template: ComponentStory<typeof ImageOrigin> = ({ children, ...args }) => (
	<Flex
		padding={['t64', 'b64']}
	>
		<ImageOrigin
			{...args}
			src={img}
			alt=""
		/>
	</Flex>
);

export const Image = Template.bind({});

Image.parameters = { controls: { include: ['width', 'height'] } };
Image.args = { width: '300px', height: 'auto' };
