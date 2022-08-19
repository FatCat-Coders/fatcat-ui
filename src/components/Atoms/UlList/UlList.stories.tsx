import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UlList as UlListOrigin } from './UlList';
import { Text } from '../Text';
import { Wrapper } from '../Wrapper';

import { formatObjectKeys } from '../../../../stories/helpers';
import { ULLIST_STYLE, COLOR } from '../../../theme/definitions';

import readme from './UlList.md';

export default {
	title: 'Basic Elements/Lists',
	component: UlListOrigin,
	argTypes: {
		variant: {
			control: 'radio',
			options: Object.keys(ULLIST_STYLE),
			description: `List of input variants: ${formatObjectKeys(ULLIST_STYLE)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'base' },
			},
		},
		bulletColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors: ${formatObjectKeys(COLOR)}`,
			type: 'string',
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof UlListOrigin>;

const Template: ComponentStory<typeof UlListOrigin> = ({ ...args }) => (
	<Wrapper
		padding={['t64', 'b64', 'l24', 'r24']}
	>
		<UlListOrigin {...args}>
			<Text as="li" fontSize="s24">item 1</Text>
			<Text as="li" fontSize="s24">item 2</Text>
			<Text as="li" fontSize="s24">item 3</Text>
			<Text as="li" fontSize="s24">item 4</Text>
		</UlListOrigin>
	</Wrapper>

);

export const UlList = Template.bind({});

UlList.parameters = { controls: { include: ['variant', 'bulletColor'] } };
UlList.args = { variant: 'base' };
