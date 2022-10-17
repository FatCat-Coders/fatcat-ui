import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image as ImageOrigin } from './Image';
import { Flex } from '../Flex';

import img from '../../../../stories/assets/images/canteen.jpeg';

import readme from './Image.md';

export default {
	title: 'Basic Elements/Image',
	component: ImageOrigin,
	argTypes: {
		w: {
			control: 'text',
			table: {
				type: { summary: null },
			},
		},
		h: {
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

Image.parameters = { controls: { include: ['w', 'h'] } };
Image.args = { w: '300px', h: 'auto' };
