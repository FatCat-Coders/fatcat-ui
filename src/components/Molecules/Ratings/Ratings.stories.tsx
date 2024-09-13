import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Atoms/Flex';

import { COLOR, GAP } from '../../../theme/definitions';
import { default as RatingsOrigin } from './Ratings'; // eslint-disable-line

import { showToastMsg } from '../../../../stories/helpers';

import readme from './Ratings.md';

export default {
	title: 'Building Elements/Ratings',
	component: RatingsOrigin,
	argTypes: {
		rating: {
			control: {
				type: 'number',
				min: 0,
				max: 5,
				step: 0.1,
			},
			description: 'The rating is used to show already determined value, if not passed or 0, components act as select',
			table: {
				type: { summary: null },
			},
		},
		getRating: {
			description: 'Function is called on click of selected rating with retunred value',
			type: 'function',
			table: {
				type: { summary: null },
			},
		},
		maxRating: {
			control: {
				type: 'number',
				min: 1,
				max: 5,
				step: 1,
			},
			description: 'Number of stars',
			table: {
				type: { summary: null },
			},
		},
		size: {
			control: 'text',
			description: 'Size of stars in pixels',
			table: {
				type: { summary: null },
			},
		},
		starColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Color of star defined in theme background color',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		backgroundColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Background defined in theme background color',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		starBorder: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Color of star border defined in theme colors',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		gap: {
			control: 'select',
			options: Object.keys(GAP),
			description: 'Gap between icons',
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
} as ComponentMeta<typeof Ratings>;

const Template: ComponentStory<typeof RatingsOrigin> = args => (
	<Flex direction="column" gap="24px">
		<RatingsOrigin {...args} getRating={rating => showToastMsg(`You rated this with ${rating} ⭐!`)} />
		<RatingsOrigin getRating={rating => showToastMsg(`You rated this with ${rating} ⭐!`)} />
	</Flex>
);

export const Ratings = Template.bind({});

Ratings.parameters = {
	controls: {
		include: [
			'backgroundColor',
			'gap',
			'getRating',
			'maxRating',
			'rating',
			'size',
			'starBorder',
			'starColor',
		],
	},
};

Ratings.args = {
	backgroundColor: 'neutrals50',
	maxRating: 5,
	rating: 1.4,
	size: '24px',
	starBorder: 'neutrals700',
	starColor: 'yellow700',
};
