import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text as TextOrigin } from './Text';

import { COLOR } from '../../../theme/definitions';

import readme from './Text.md';

export default {
	title: 'Basic Elements/Text',
	component: TextOrigin,
	argTypes: {
		textColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Just for demo purposes',
			type: { name: 'string' },
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
} as ComponentMeta<typeof TextOrigin>;

const Template: ComponentStory<typeof TextOrigin> = ({ ...args }) => (
	<TextOrigin {...args}>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
		the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
		but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
		sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	</TextOrigin>
);

export const Text = Template.bind({});

Text.parameters = { controls: { include: ['textColor'] } };
Text.args = {
	textColor: 'neutrals800',
};
