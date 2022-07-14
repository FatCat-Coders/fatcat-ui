import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ULList as ULListOrigin } from '../../../src/components/Atoms/ULList';
import { Text } from '../../../src/components/Atoms/Text';
import { Wrapper } from '../../../src/components/Atoms/Wrapper';

import { formatObjectKeys } from '../../helpers';
import { ULLIST_STYLE, COLOR } from '../../../src/theme/definitions';

import readme from './ULList.md';

export default {
	title: 'Basic Elements/Lists/ULList',
	component: ULListOrigin,
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
} as ComponentMeta<typeof ULListOrigin>;

const Template: ComponentStory<typeof ULListOrigin> = ({ ...args }) => (
	<Wrapper
		padding={['t64', 'b64', 'l24', 'r24']}
	>
		<ULListOrigin {...args}>
			<Text as="li" fontSize="s24">item 1</Text>
			<Text as="li" fontSize="s24">item 2</Text>
			<Text as="li" fontSize="s24">item 3</Text>
			<Text as="li" fontSize="s24">item 4</Text>
		</ULListOrigin>
	</Wrapper>

);

export const ULList = Template.bind({});

ULList.parameters = { controls: { include: ['variant', 'bulletColor'] } };
ULList.args = { variant: 'base' };
