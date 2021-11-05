import React, { useState } from 'react';

// Types
import { TContentfulAsset } from '../../../../types';

// Assets
import play from '../../../../assets/images/Icons/play-icon.svg';

// Helpers
import { parseWistia } from '../../../../utils/parse-wistia';

// Atoms
import {
	Flex, Image, Paragraph, Wrapper,
} from '../../../Atoms';

// Molecules
import WistiaEmbed from '../WistiaEmbed';

type TInlineVideo = {
	title: string,
	wistiaVideoUrl: string,
	backgroundImage: TContentfulAsset
}

const InlineVideo: React.FC<TInlineVideo> = (props) => {
	const {
		title,
		wistiaVideoUrl,
		backgroundImage,
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Flex
				borderRadius="20px"
				width="100%"
				tablet={['flexWrap']}
				overflow="hidden"
			>
				<Flex
					backgroundColor="backgroundLighter"
					height="auto"
					maxWidth="50%"
					padding={['t120', 'b120', 'l80']}
					tablet={['fluid', 'contentCenter', 'clearLeftSideSpacing', 'clearTopSideSpacing', 'clearBottomSideSpacing',
						{
							padding: ['t56', 'b56'],
						},
						{
							maxWidth: 'unset',
						},
						{
							width: '100%',
						},
					]}
					overflow="visible"
				>
					<Paragraph
						fontSize="s37"
						maxWidth="223px"
						tablet={['textCenter',
							{
								maxWidth: 'unset',
							},
							{
								fontSize: 's24',
							},
						]}
					>
						{title}
					</Paragraph>
				</Flex>
				<Wrapper
					height="auto"
					tablet={['fluid', {
						height: '274px',
					}]}
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					backgroundImage={backgroundImage?.file.url}
				>
					<Flex
						justifyContent="center"
						alignItems="center"
						height="100%"
					>
						<Wrapper
							hover={['pointer', 'opacity95']}
							onClick={() => setIsOpen(true)}
						>
							<Image
								src={play}
								height="80px"
							/>
						</Wrapper>
					</Flex>
				</Wrapper>
			</Flex>
			{isOpen && (
				<Flex
					position="fixed"
					top="0"
					left="0"
					right="0"
					bottom="0"
					zIndex={1000}
					backgroundColor="wistiaOverlay"
					justifyContent="center"
					alignItems="center"
					onClick={() => setIsOpen(false)}
				>
					<Wrapper
						position="relative"
						height="auto"
						maxWidth="650px"
						onClick={e => (e.stopPropagation())}
					>
						<WistiaEmbed
							hashedId={parseWistia(wistiaVideoUrl)}
						/>
					</Wrapper>
				</Flex>
			)}
		</>
	);
};

export default InlineVideo;
