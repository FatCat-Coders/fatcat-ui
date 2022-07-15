import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { formatObjectKeys } from '../../helpers';
import {
	BUTTON_COLOR,
	BUTTON_SIZE,
	BUTTON_VARIANT,
} from '../../../src/theme/definitions';

import { Button as ButtonOrigin } from '../../../src/components/Atoms/Button';
import { Flex } from '../../../src/components/Atoms/Flex';

import readme from './Button.md';

export default {
	title: 'Basic Elements/Button',
	component: ButtonOrigin,
	argTypes: {
		children: {
			name: 'Content',
			control: 'text',
			description: 'Text inside the button (Just for demo purposes)',
			type: 'string',
		},
		color: {
			control: 'radio',
			options: Object.keys(BUTTON_COLOR),
			description: `List of button colors: ${formatObjectKeys(BUTTON_COLOR)}`,
			table: {
				type: { summary: null },
			},
		},
		size: {
			control: 'radio',
			options: Object.keys(BUTTON_SIZE),
			description: `List of button sizes: ${formatObjectKeys(BUTTON_SIZE)}`,
			table: {
				type: { summary: null },
			},
		},
		variant: {
			control: 'radio',
			options: Object.keys(BUTTON_VARIANT),
			description: `List of button variants: ${formatObjectKeys(BUTTON_VARIANT)}`,
			table: {
				type: { summary: null },
			},
		},
		disabled: { control: 'boolean', description: 'When present, it specifies that the button should be disabled.' },
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
		padding={['t64', 'b64']}
		justifyContent="center"
	>
		<ButtonOrigin {...args}>
			{children}
		</ButtonOrigin>
	</Flex>
);

export const Button = Template.bind({});

Button.parameters = { controls: { include: ['variant', 'Content', 'color', 'disabled', 'size'] } };
Button.args = {
	children: 'Button',
	color: 'primary',
	disabled: false,
	size: 'large',
	variant: 'primary',
};
