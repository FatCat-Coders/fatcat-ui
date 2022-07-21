import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea as TextAreaOrigin } from './TextArea';
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { INPUT_STYLE } from '../../../theme/definitions';

import readme from './TextArea.md';

export default {
	title: 'Basic Elements/Inputs',
	component: TextAreaOrigin,
	argTypes: {
		variant: {
			control: 'radio',
			options: Object.keys(INPUT_STYLE),
			description: `List of input variants: ${formatObjectKeys(INPUT_STYLE)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'base' },
			},
		},
		rows: { control: 'text', description: 'String with number of rows', type: 'string' },
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof TextAreaOrigin>;

const Template: ComponentStory<typeof TextAreaOrigin> = ({ children, ...args }) => (
	<Flex
		backgroundColor="backgroundUltraDark"
		padding={['t64', 'b64', 'l24', 'r24']}
		width="90%"
	>
		<TextAreaOrigin
			{...args}
		/>
	</Flex>
);

export const TextArea = Template.bind({});

TextArea.parameters = { controls: { include: ['variant', 'rows'] } };
TextArea.args = { variant: 'base', rows: '20' };
