import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Atoms/Wrapper';

import { TEXT_COLOR, TEXT_STYLE } from '../../../theme/definitions';
import { default as AccordionOrigin } from './Accordion'; // eslint-disable-line

import readme from './Accordion.md';

const loremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
	title: 'Building Elements/Accordion',
	component: AccordionOrigin,
	argTypes: {
		titleAs: {
			control: 'select',
			options: headingTypes,
			description: `List of heading types: ${headingTypes.map(i => `\`${i}\``).join(', ')}`,
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		title: {
			control: 'text',
			description: 'Content shown in title of the accordion',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		titleColor: {
			control: 'select',
			options: Object.keys(TEXT_COLOR),
			description: 'Color of text in title',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		content: {
			control: 'text',
			description: 'Content inside the accordion',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		contentSize: {
			control: 'select',
			options: Object.keys(TEXT_STYLE.paragraph),
			description: 'Content paragraph size',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		contentColor: {
			control: 'select',
			options: Object.keys(TEXT_COLOR),
			description: 'Color of content text',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		useArrow: {
			control: 'boolean',
			description: 'Use an arrow icon instead of a plus icon',
			type: 'boolean',
			table: {
				type: { summary: null },
			},
		},
		css: {
			control: 'text',
			description: 'Additional custom CSS style',
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
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof AccordionOrigin> = args => (
	<Wrapper>
		<AccordionOrigin {...args} />
		<AccordionOrigin
			title="Accordion default style"
			content={loremText}
			useArrow
		/>
	</Wrapper>
);

export const Accordion = Template.bind({});

Accordion.parameters = {
	controls: {
		include: [
			'content',
			'contentColor',
			'contentSize',
			'css',
			'title',
			'titleAs',
			'titleColor',
			'useArrow',
		],
	},
};

Accordion.args = {
	titleAs: 'h2',
	title: 'Accordion title',
	titleColor: 'primary',
	content: loremText,
	contentSize: 'large',
	useArrow: false,
	contentColor: 'primary',
};
