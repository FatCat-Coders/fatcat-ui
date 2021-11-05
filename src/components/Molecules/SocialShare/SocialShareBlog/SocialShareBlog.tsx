import React, { useState } from 'react';
import {
	EmailShareButton,
	FacebookShareButton, LinkedinShareButton, TwitterShareButton,
} from 'react-share';

// Utils
import { getUrl } from '../../../../utils/get-url';

// FontAwesome
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faLink } from '@fortawesome/free-solid-svg-icons';

// Atoms
import {
	BR, Flex, Paragraph, Wrapper,
} from '../../../Atoms';

// Molecules
import SocialShareItem from './SocialShareItem';

type TSocialShare ={
	slug: string;
}
const SocialShareBlog: React.FC<TSocialShare> = (props) => {
	const {
		slug,
	} = props;

	const [copy, setCopy] = useState('');

	const copyToClipBoard = async (slug: string) => {
		try {
			await navigator.clipboard.writeText(slug);
			setCopy('Copied!');
		} catch (err) {
			setCopy('Failed to copy!');
		}
	};
	return (
		<Flex
			backgroundColor="backgroundLight"
			direction="column"
			position="sticky"
			borderRadius="6px"
			top="100px"
			maxWidth="200px"
			height="fit-content"
			padding={['t24', 'b24', 'l16', 'r16']}
			tablet={['unsetPosition', 'flexWrap',
				{
					maxWidth: 'unset',
				},
				{
					width: 'fit-content',
				},
				{
					margin: ['b20'],
				},
			]}
		>
			<Paragraph
				uppercase
				textSize="paragraph14"
				padding={['b24', 'l16', 'r16']}
				tablet={['fluid', {
					padding: ['b12'],
				}]}
			>
				Share on
				{' '}
				{' '}
				<BR hide="tablet" />
				social media
			</Paragraph>
			<Flex
				tablet={['row']}
				direction="column"
			>
				<FacebookShareButton
					url={getUrl()}
				>
					<SocialShareItem
						icon={faFacebookF}
						text="Facebook"
					/>
				</FacebookShareButton>
				<TwitterShareButton
					url={getUrl()}
				>
					<SocialShareItem
						icon={faTwitter}
						text="Twitter"
					/>
				</TwitterShareButton>
				<LinkedinShareButton
					url={getUrl()}
				>
					<SocialShareItem
						icon={faLinkedinIn}
						text="Linkedin"
					/>
				</LinkedinShareButton>
				<EmailShareButton
					url={getUrl()}
				>
					<SocialShareItem
						icon={faAt}
						text="Mail"
					/>
				</EmailShareButton>
				<Wrapper
					as="a"
					onClick={(e) => {
						e.preventDefault();
						copyToClipBoard(slug);
					}}
					hover={['pointer']}
					tablet={[copy && {
						padding: ['t16'],
					}]}
				>
					<SocialShareItem
						icon={faLink}
						text="Copylink"
					/>
					<Wrapper
						padding={['l8']}
						tablet={['clearLeftSideSpacing']}
					>
						{copy}
					</Wrapper>
				</Wrapper>
			</Flex>
		</Flex>
	);
};

export default SocialShareBlog;
