import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OlList as OlListOrigin } from './OlList';
import { Text } from '../Text';
import { Wrapper } from '../Wrapper';

import { formatObjectKeys } from '../../../../stories/helpers';
import { OLLIST_STYLE, COLOR } from '../../../theme/definitions';

import readme from './OlList.md';

export default {
	title: 'Basic Elements/Lists',
	component: OlListOrigin,
	argTypes: {
		variant: {
			control: 'radio',
			options: Object.keys(OLLIST_STYLE),
			description: `List of input variants: ${formatObjectKeys(OLLIST_STYLE)}`,
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
} as ComponentMeta<typeof OlListOrigin>;

const Template: ComponentStory<typeof OlListOrigin> = ({ ...args }) => (
	<Wrapper
		padding={['t64', 'b64', 'l24', 'r24']}
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

OlList.parameters = {
	controls: {
		include: [
			'variant',
			'bulletColor',
		],
	},
};

OlList.args = {
	variant: 'base',
	bulletColor: 'black',
};
