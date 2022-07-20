import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Atoms/Wrapper';

import TagOrigin from './Tag';

import readme from './Tag.md';
import { COLOR, TEXT_COLOR } from '../../../theme/definitions/color/color';

export default {
	title: 'Building Elements/Tag',
	component: TagOrigin,
	argTypes: {
		tagName: {
			control: 'text',
			description: 'Name of the tag',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		onClose: {
			description: 'Function is called on click of close button with tag name as argument',
			type: 'function',
            defaultValue: undefined,
			table: {
				type: { summary: null },
			},
		},
		onClick: {
			description: 'Function is called on click of tag with tag name as argument',
			type: 'function',
            defaultValue: undefined,
			table: {
				type: { summary: null },
			},
		},
		background: {
			control: 'select',
            defaultValue: 'lightGrey',
			options: Object.keys(COLOR),
			description: 'Background color of tag',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		textColor: {
			control: 'select',
            defaultValue: 'primary',
			options: Object.keys(TEXT_COLOR),
			description: 'Text color of tag',
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
} as ComponentMeta<typeof TagOrigin>;

const Template: ComponentStory<typeof TagOrigin> = args => (
	<Wrapper>
		<TagOrigin tagName="Defaults" />
		<TagOrigin tagName="Defaults with close button" onClose={tagname => tagname} />
		<TagOrigin {...args} />
	</Wrapper>
);

export const Tag = Template.bind({});

const onClose = (tagName:string) => tagName;
const onClick = (tagName:string) => tagName;

Tag.args = {
	tagName: 'Javascript',
	onClick,
	onClose,
	background: 'lightGrey',
	textColor: 'primary',
} as ComponentStory<typeof TagOrigin>['args'];

Tag.parameters = { controls: { include: ['tagName', 'onClick', 'onClose', 'background', 'textColor'] } };
