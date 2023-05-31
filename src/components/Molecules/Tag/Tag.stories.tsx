import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { showToastMsg } from '../../../../stories/helpers';

import { Wrapper } from '../../Atoms/Wrapper';
import { tagVariant } from './Tag.atoms';
import { BACKGROUND_COLOR, TEXT_COLOR, COLOR } from '../../../theme/definitions/color/color';

import TagOrigin from './Tag';

import readme from './Tag.md';

export default {
	title: 'Building Elements/Tag',
	component: TagOrigin,
	argTypes: {
		name: {
			control: 'text',
			description: 'Name of the tag',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		content: {
			control: 'text',
			description: '`String` or `RecatComponent` to show inside of tag',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		onClose: {
			description: 'Function is called on click of close button with tag name as argument',
			type: 'function',
			table: {
				type: { summary: null },
			},
		},
		onClick: {
			description: 'Function is called on click of tag with tag name as argument',
			type: 'function',
			table: {
				type: { summary: null },
			},
		},
		backgroundColor: {
			control: 'select',
			options: Object.keys(BACKGROUND_COLOR),
			description: 'Background color of tag',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		buttonColor: {
			control: 'select',
			defaultValue: 'primary',
			options: Object.keys(COLOR),
			description: 'Close button color',
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
		variant: {
			control: 'select',
			defaultValue: 'primary',
			options: Object.keys(tagVariant),
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

const onClose = (name: string) => { showToastMsg(`🦄 "${name}" is closed`); };
const onClick = (name: string) => { showToastMsg(`🦄 "${name}" is clicked`); };

const Template: ComponentStory<typeof TagOrigin> = args => (
	<Wrapper>
		<TagOrigin onClick={onClick} name="first_tag" content="Default" />
		<TagOrigin
			onClick={onClick}
			name="second_tag"
			content="Defaults with close button"
			onClose={onClose}
		/>
		<TagOrigin {...args} />
	</Wrapper>
);

export const Tag = Template.bind({});

Tag.parameters = {
	controls: {
		include: [
			'name',
			'content',
			'onClick',
			'onClose',
			'backgroundColor',
			'textColor',
			'buttonColor',
			'variant',
		],
	},
};

Tag.args = {
	name: 'third_tag',
	content: 'Javascript',
	onClick,
	onClose,
	textColor: 'primary',
	variant: 'base',
	buttonColor: 'grey',
};
