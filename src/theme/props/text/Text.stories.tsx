import React from 'react';

import { Paragraph } from '../../../components/Atoms/Paragraph';
import { formatObjectKeys } from '../../../../stories/helpers';

import {
	TEXT_COLOR,
	LINE_HEIGHT,
	FONT_SIZE,
	FONT_WEIGHT,
	FONT_FAMILY,
} from '../../../theme/definitions';

import {
	TEXT_SIZE,
} from '../../../theme/styles';

import readme from './Text.md';

export default {
	title: 'Element Props/Text',
	argTypes: {
		textAlign: { control: 'text', description: 'String with css property', type: 'string' },
		textColor: {
			control: 'select',
			options: Object.keys(TEXT_COLOR),
			description: `List of text colors: ${formatObjectKeys(TEXT_COLOR)}`,
			type: 'string',
		},
		textSize: {
			control: 'select',
			options: Object.keys(TEXT_SIZE),
			description: `List of text sizes: ${formatObjectKeys(TEXT_SIZE)}`,
			type: 'string',
		},
		fontSize: {
			control: 'select',
			options: Object.keys(FONT_SIZE),
			description: `List of font sizes: ${formatObjectKeys(FONT_SIZE)}`,
			type: 'string',
		},
		lineHeight: {
			control: 'select',
			options: Object.keys(LINE_HEIGHT),
			description: `List of line height: ${formatObjectKeys(LINE_HEIGHT)}`,
			type: 'string',
		},
		fontWeight: {
			control: 'select',
			options: Object.keys(FONT_WEIGHT),
			description: `List of font weight: ${formatObjectKeys(FONT_WEIGHT)}`,
			type: 'string',
		},
		fontFamily: {
			control: 'select',
			options: Object.keys(FONT_FAMILY),
			description: `List of font family: ${formatObjectKeys(FONT_FAMILY)}`,
			type: 'string',
		},
		whiteSpace: { control: 'text', description: 'String with css property', type: 'string' },
		uppercase: { control: 'boolean', description: 'Use uppercase', type: 'boolean' },
		lowercase: { control: 'boolean', description: 'Use lowercase', type: 'boolean' },
		capitalize: { control: 'boolean', description: 'Use lowercase', type: 'boolean' },
		ellipsis: { control: 'number', description: 'Rows numbers for clumping', type: 'number' },
		fontStyle: { control: 'text', description: 'String with css property', type: 'string' },
		textDecoration: { control: 'text', description: 'String with css property', type: 'string' },
		textDirection: {
			control: 'select',
			options: ['ltr', 'rtl', 'initial', 'inherit'],
			description: 'String with css property',
			type: 'string',
		},
		unicodeBidi: {
			control: 'select',
			options: ['normal', 'embed', 'bidi-override', 'initial', 'inherit'],
			description: 'String with css property',
			type: 'string',
		},
		letterSpacing: { control: 'text', description: 'String with css property', type: 'string' },
		textColorOpacity: { control: 'number', description: 'The number in RGBA opacity', type: 'number' },
		textShadow: { control: 'text', description: 'String with css property', type: 'string' },
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
};

const Template = ({ children, ...args }) => (
	<Paragraph
		{...args}
	>
		Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln&apos;s Inn Hall. Implacable November weather.
		As much mud in the streets as if the waters had but newly retired from the face of the earth.
	</Paragraph>
);

export const Text = Template.bind({});

Text.parameters = {
	controls: {
		include: [
			'capitalize',
			'ellipsis',
			'fontFamily',
			'fontSize',
			'fontStyle',
			'fontWeight',
			'letterSpacing',
			'lineHeight',
			'lowercase',
			'textAlign',
			'textColor',
			'textColorOpacity',
			'textDecoration',
			'textDirection',
			'textShadow',
			'textSize',
			'unicodeBidi',
			'uppercase',
			'whiteSpace',
		],
	},
};

Text.args = {
	textColor: 'black',
	textAlign: 'center',
	fontStyle: 'italic',
};
