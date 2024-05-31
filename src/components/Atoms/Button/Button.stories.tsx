import { Meta, StoryObj } from '@storybook/react';
import { formatObjectKeys } from '../../../../stories/helpers';
import {
	BUTTON_COLOR,
	BUTTON_SIZE,
	BUTTON_VARIANT,
} from '../../../theme/definitions';

import { Button as ButtonOrigin } from './Button';
import * as icons from '../Icon/icons';

import readme from './Button.md';

const color = { ...BUTTON_COLOR };

const meta: Meta<typeof ButtonOrigin> = {
	title: 'Basic Elements/Button',
	component: ButtonOrigin,
	argTypes: {
		children: {
			name: 'Content',
			control: 'text',
			description: 'Text inside the button (Just for demo purposes)',
			type: 'string',
		},
		buttonColor: {
			control: 'radio',
			options: Object.keys(color),
			description: `List of button colors: ${formatObjectKeys(color)}`,
			table: {
				type: { summary: null },
				defaultValue: { summary: 'Same value as variant' },
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
		leadingIcon: {
			control: 'select',
			options: Object.keys(icons),
			description: 'When present, it specifies that the button leading icon.',
			type: 'string',
		},
		trailingIcon: {
			control: 'select',
			options: Object.keys(icons),
			description: 'When present, it specifies that the button trailing icon.',
			type: 'string',
		},
		isLoading: {
			control: 'radio',
			options: [true, false],
			description: 'Is it loading',
			table: {
				type: { summary: null },
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
};

export default meta;
type Story = StoryObj<typeof ButtonOrigin>;

export const Button:Story = {
	controls:
		{ include: ['variant', 'Content', 'buttonColor', 'disabled', 'size', 'leadingIcon', 'trailingIcon'] },
	args: {
		size: 'large',
		variant: 'primary',
		children: 'Button',
	},
};
