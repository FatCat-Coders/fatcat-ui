import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Atoms/Wrapper';

import { default as SectionOrigin } from './Section'; // eslint-disable-line

import readme from './Section.md';

const SectionWrapper = styled(Wrapper)`
	section {
		width: auto;
	}
`;

export default {
	title: 'Basic Elements/Section',
	component: SectionOrigin,
	argTypes: {
		backgroundColor: { control: 'color' },
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
	<SectionWrapper>
		<SectionOrigin {...args}>
			{children}
		</SectionOrigin>
	</SectionWrapper>
);

export const Section = Template.bind({});

Section.args = {
	children: 'SectionOrigin',
};
