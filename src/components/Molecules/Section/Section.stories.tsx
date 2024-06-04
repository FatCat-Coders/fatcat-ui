import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionOrigin from './Section'; // eslint-disable-line

import { SECTION_VARIANT } from '../../../theme/definitions';
import { formatObjectKeys } from '../../../../stories/helpers';

import readme from './Section.md';

export default {
	title: 'Basic Elements/Section',
	component: SectionOrigin,
	argTypes: {
		variant: {
			control: 'select',
			options: Object.keys(SECTION_VARIANT),
			description: `List of section variants: ${formatObjectKeys(SECTION_VARIANT)}`,
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

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SectionOrigin> = ({ children, ...args }) => (
	<SectionOrigin {...args}>
		{children}
	</SectionOrigin>
);

export const Section = Template.bind({});

Section.parameters = {
	controls: {
		include: [
			'variant',
		],
	},
};

Section.args = {
	children: 'SectionOrigin',
	variant: 'default',
};
