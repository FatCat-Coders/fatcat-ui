import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as SectionOrigin } from './Section'; // eslint-disable-line

import { SECTION_WIDTH } from '../../../theme/definitions';
import { formatObjectKeys } from '../../../../stories/helpers';

import readme from './Section.md';

export default {
	title: 'Basic Elements/Section',
	component: SectionOrigin,
	argTypes: {
		w: {
			control: 'select',
			options: Object.keys(SECTION_WIDTH),
			description: `List of section widths: ${formatObjectKeys(SECTION_WIDTH)}`,
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
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof SectionOrigin> = ({ children, ...args }) => (
	<SectionOrigin {...args}>
		{children}
	</SectionOrigin>
);

export const Section = Template.bind({});

Section.parameters = {
	controls: {
		include: [
			'children',
			'w',
		],
	},
};

Section.args = {
	children: 'SectionOrigin',
	w: 'normal',
};
