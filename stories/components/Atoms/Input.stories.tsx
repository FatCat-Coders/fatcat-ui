import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField as InputOrigin } from '../../../src/components/Atoms/Input';
import { Flex } from '../../../src/components/Atoms/Flex';
import { formatObjectKeys } from '../../helpers';
import { INPUT_STYLE } from '../../../src/theme/definitions';

import readme from './Input.md';

export default {
	title: 'Basic Elements/Inputs/Input',
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
