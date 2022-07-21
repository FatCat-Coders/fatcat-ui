import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField as InputOrigin } from './Input';
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { INPUT_STYLE } from '../../../theme/definitions';

import readme from './Input.md';

export default {
	title: 'Basic Elements/Inputs',
	component: InputOrigin,
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
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof InputOrigin>;

const Template: ComponentStory<typeof InputOrigin> = ({ children, ...args }) => (
	<Flex
		backgroundColor="backgroundUltraDark"
		padding={['t64', 'b64', 'l24', 'r24']}
	>
		<InputOrigin
			{...args}
		/>
	</Flex>
);

export const Input = Template.bind({});

Input.parameters = { controls: { include: ['variant'] } };
Input.args = { variant: 'base' };
