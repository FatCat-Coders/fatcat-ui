import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Atoms/Wrapper';

import {
	COLOR,
	BACKGROUND_COLOR,
} from '../../../theme/definitions';
import { default as BannerOrigin } from './Banner'; // eslint-disable-line

import { formatObjectKeys } from '../../../../stories/helpers';

import readme from './Banner.md';

export default {
	title: 'Building Elements/Banner',
	component: BannerOrigin,
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Color of text in title',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		gap: {
			control: 'text',
			description: 'Gap between icons',
			table: {
				type: { summary: null },
				defaultValue: { summary: '10px' },
			},
		},
		backgroundColorHex: { control: 'color', description: 'String with css property', type: 'string' },
		backgroundColor: {
			control: 'select',
			options: Object.keys(BACKGROUND_COLOR),
			description: `List of colors: ${formatObjectKeys(BACKGROUND_COLOR)}`,
			type: 'string',
		},
		backgroundColorOpacity: { control: 'number', description: 'The number for RGBA opacity applied on background-color', type: 'number' },
		backgroundImage: { control: 'file', description: 'Imported image in file', type: 'string' },
		backgroundRepeat: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundPosition: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundSize: { control: 'text', description: 'String with css property', type: 'string' },
		content: {
			control: 'text',
			description: '`String` or `ReactElement` for button content',
			table: {
				type: { summary: null },
			},
		},
		buttonContent: {
			control: 'text',
			description: '`String` or `ReactElement` for button content',
			table: {
				type: { summary: null },
			},
		},
		buttonVariant: {
			control: 'text',
			description: 'Gap between icons',
			table: {
				type: { summary: null },
			},
		},
		scale: {
			control: 'boolean',
			description: 'Scale top and bottom padding on smaller screens',
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
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof BannerOrigin> = args => (
	<Wrapper>
		<BannerOrigin {...args} />
	</Wrapper>
);

export const Banner = Template.bind({});

Banner.parameters = {
	controls: {
		include: [
			'backgroundImage',
			'backgroundColor',
			'backgroundColorHex',
			'backgroundColorOpacity',
			'backgroundRepeat',
			'backgroundPosition',
			'backgroundSize',
			'content',
			'buttonContent',
			'buttonVariant',
			'scale',
		],
	},
};

Banner.args = {
	backgroundImage: undefined,
	backgroundColor: 'primary',
	backgroundColorHex: undefined,
	backgroundColorOpacity: undefined,
	backgroundRepeat: undefined,
	backgroundPosition: undefined,
	backgroundSize: undefined,
	content: 'Sometimes, the only missing piece of a puzzle is the right people.',
	buttonContent: 'Let’s find them!',
	buttonVariant: undefined,
	scale: undefined,
};
