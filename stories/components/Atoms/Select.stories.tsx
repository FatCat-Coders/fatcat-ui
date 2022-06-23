import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Option } from '../../../src/components/Atoms/Option';
import { Select as SelectOrigin } from '../../../src/components/Atoms/Select';
import { Flex } from '../../../src/components/Atoms/Flex';

import readme from './Select.md';

const StyledOption = ({ children, ...props }) => (
	<Option
		$padding={['t8', 'b8', 'l16', 'r16']}
		{...props}
	>
		{children}
	</Option>
);

export default {
	title: 'Basic Elements/Select',
	component: Option,
	argTypes: {
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = ({ children, ...args }) => (
	<Flex
		$padding={['t64', 'b64']}
		$backgroundColor="grey"
		$justifyContent="center"
	>
		<SelectOrigin
			$padding={['t8', 'b8', 'l16', 'r16']}
			$minWidth="200px"
			{...args}
		>
			<StyledOption>Option 1</StyledOption>
			<StyledOption>Option 2</StyledOption>
			<StyledOption>Option 3</StyledOption>
			<StyledOption>Option 4</StyledOption>
		</SelectOrigin>
	</Flex>
);

export const Select = Template.bind({});

Select.parameters = { controls: { include: [] } };
Select.args = { };
