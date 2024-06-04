import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Atoms/Flex';

import { COLOR } from '../../../theme/definitions';
import { sizes } from './Avatar';
import { formatObjectKeys } from '../../../../stories/helpers';
import { default as AvatarOrigin } from './Avatar'; // eslint-disable-line

import readme from './Avatar.md';

import img from '../../../../stories/assets/images/canteen.jpeg';

export default {
	title: 'Building Elements/Avatar',
	component: AvatarOrigin,
	argTypes: {
		image: {
			control: 'file',
			description: 'Main image for the avatar, or a React element',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		imageAlt: {
			control: 'text',
			description: 'Alt text for the main image',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		profile: {
			control: 'file',
			description: 'Profile image for the avatar, or a React element',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		profileAlt: {
			control: 'text',
			description: 'Alt text for the profile image',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		title: {
			control: 'text',
			description: 'Following title for the Avatar',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		subtitle: {
			control: 'text',
			description: 'Following subtitle for the Avatar',
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		textColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of text colors: ${formatObjectKeys(COLOR)}`,
			type: 'string',
		},
		size: {
			control: 'text',
			description: `Size of main image in pixels or one from the list: ${formatObjectKeys(sizes)}`,
			type: 'string',
			table: {
				type: { summary: null },
			},
		},
		styled: {
			control: 'text',
			description: 'Additional custom CSS style',
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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof AvatarOrigin> = args => (
	<Flex tablet={['column']} gap="24px">
		<AvatarOrigin {...args} />
		<AvatarOrigin
			image={(<img src={img} alt="avatar" />)}
			profile={(<img src={img} alt="avatar" />)}
		/>
	</Flex>
);

export const Avatar = Template.bind({});

Avatar.parameters = {
	controls: {
		include: [
			'image',
			'imageAlt',
			'profile',
			'profileAlt',
			'title',
			'subtitle',
			'textColor',
			'size',
			'styled',
		],
	},
};

Avatar.args = {
	image: img,
	imageAlt: 'avatar alt',
	profile: img,
	profileAlt: 'profile alt',
	title: 'Steva the Cat',
	subtitle: 'Office cat',
	size: 'xlarge',
};
