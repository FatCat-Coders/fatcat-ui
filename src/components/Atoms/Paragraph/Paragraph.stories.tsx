import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph as ParagraphOrigin } from './Paragraph';

import { TEXT_COLOR } from '../../../theme/definitions';

import readme from './Paragraph.md';

export default {
	title: 'Basic Elements/Paragraph',
	component: ParagraphOrigin,
	argTypes: {
		textColor: {
			control: 'select',
			options: Object.keys(TEXT_COLOR),
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
} as ComponentMeta<typeof ParagraphOrigin>;

const Template: ComponentStory<typeof ParagraphOrigin> = ({ ...args }) => (
	<ParagraphOrigin {...args}>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
		the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
		but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
		sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	</ParagraphOrigin>
);

export const Paragraph = Template.bind({});

Paragraph.parameters = { controls: { include: ['textColor'] } };
Paragraph.args = {
	textColor: 'black',
};