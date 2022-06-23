import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { formatObjectKeys } from '../../helpers';
import { BUTTON_STYLE } from '../../../src/theme/definitions';

import { Button as ButtonOrigin } from '../../../src/components/Atoms/Button';
import { Flex } from '../../../src/components/Atoms/Flex';

import readme from './Button.md';

export default {
	title: 'Basic Elements/Button',
	component: ButtonOrigin,
	argTypes: {
		$variant: {
			control: 'radio',
			options: Object.keys(BUTTON_STYLE),
			description: `List of button variants: ${formatObjectKeys(BUTTON_STYLE)}`,
			table: {
				type: { summary: null },
			},
		},
		children: {
			name: 'Content',
			control: 'text',
			description: 'Text inside the button (Just for demo purposes)',
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
} as ComponentMeta<typeof ButtonOrigin>;

const Template: ComponentStory<typeof ButtonOrigin> = ({ children, ...args }) => (
	<Flex
		$padding={['t64', 'b64']}
		$backgroundColor="grey"
		$justifyContent="center"
	>
		<ButtonOrigin {...args}>
			{children}
		</ButtonOrigin>
	</Flex>
);

export const Button = Template.bind({});

Button.parameters = { controls: { include: ['$variant', 'Content'] } };
Button.args = { children: 'Button', $variant: 'base' };
