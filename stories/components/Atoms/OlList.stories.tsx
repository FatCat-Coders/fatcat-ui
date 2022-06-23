import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OlList as OlListOrigin } from '../../../src/components/Atoms/OlList';
import { Text } from '../../../src/components/Atoms/Text';
import { Wrapper } from '../../../src/components/Atoms/Wrapper';

import { formatObjectKeys } from '../../helpers';
import { OLLIST_STYLE } from '../../../src/theme/definitions';

import readme from './OlList.md';

export default {
	title: 'Basic Elements/Lists/OlList',
	component: OlListOrigin,
	argTypes: {
		$variant: {
			control: 'radio',
			options: Object.keys(OLLIST_STYLE),
			description: `List of input variants: ${formatObjectKeys(OLLIST_STYLE)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'base' },
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
} as ComponentMeta<typeof OlListOrigin>;

const Template: ComponentStory<typeof OlListOrigin> = ({ ...args }) => (
	<Wrapper
		$backgroundColor="backgroundUltraDark"
		$padding={['t64', 'b64', 'l24', 'r24']}
	>
		<OlListOrigin {...args}>
			<Text as="li">item 1</Text>
			<Text as="li">item 2</Text>
			<Text as="li">item 3</Text>
			<Text as="li">item 4</Text>
		</OlListOrigin>
	</Wrapper>

);

export const OlList = Template.bind({});

OlList.parameters = { controls: { include: ['$variant'] } };
OlList.args = { $variant: 'base' };
