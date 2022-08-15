import React from 'react';

import { Wrapper } from '../../../components/Atoms/Wrapper';
import { Flex } from '../../../components/Atoms/Flex';

import readme from './Background.md';
import colors from '../../../../stories/assets/images/colors.svg';

import { formatObjectKeys } from '../../../../stories/helpers';
import { BACKGROUND_COLOR } from '../../../theme/definitions';

export default {
	title: 'Element Props/Background',
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: Object.keys(BACKGROUND_COLOR),
			description: `List of colors: ${formatObjectKeys(BACKGROUND_COLOR)}`,
			type: 'string',
		},
		backgroundColorHex: { control: 'color', description: 'String with css property', type: 'string' },
		backgroundColorOpacity: { control: 'number', description: 'The number for RGBA opacity applied on background-color', type: 'number' },
		backgroundImage: { control: 'file', description: 'Imported image in file', type: 'string' },
		backgroundRepeat: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundPosition: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundSize: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundGradient: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundBlur: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundAttachment: { control: 'text', description: 'String with css property', type: 'string' },
		backgroundBlendMode: { control: 'text', description: 'String with css property', type: 'string' },
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
	<Flex gap="20px">
		<Wrapper
			height="100px"
			width="100px"
			{...args}
		/>
		<Wrapper
			height="100px"
			width="100px"
			{...args}
			backgroundImage={colors}
		/>
	</Flex>
);

export const Background = Template.bind({});

Background.parameters = {
	controls: {
		include: [
			'backgroundColor',
			'backgroundColorOpacity',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundPosition',
			'backgroundSize',
			'backgroundGradient',
			'backgroundBlur',
			'backgroundAttachment',
			'backgroundBlendMode',
		],
	},
};
Background.args = {
	backgroundColor: 'yellow',
	backgroundSize: 'cover',
};
