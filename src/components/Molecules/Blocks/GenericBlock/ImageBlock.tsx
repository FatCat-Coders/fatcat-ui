import React from 'react';

// Types
import { TContentfulAsset } from '../../../../types';

// Atoms
import {
	Flex, Heading, Image,
} from '../../../Atoms';

import { GenericBlockRemarkWrapper } from './GenericBlock.atoms';

// Molecules
import TitleExtension from '../../Generic/TitleExtension/ExtendedTitle';

type TImageBlock = {
	title: string,
	description: string
	image: TContentfulAsset,
	extendedTitle: string
	animation: React.ReactNode,
}
const ImageBlock: React.FC<TImageBlock> = (props) => {
	const {
		title,
		description,
		image,
		extendedTitle,
		animation,
	} = props;
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<Flex
				padding={['b80']}
				justifyContent="center"
				direction="column"
				alignItems="center"
				scale
			>
				<Heading
					as="h1"
					maxWidth="750px"
					textAlign="center"
					position="relative"
				>
					{title}
					{extendedTitle && (
						<TitleExtension extension={extendedTitle} />
					)}
				</Heading>
				{description && (
					<GenericBlockRemarkWrapper
						className="center"
						padding={['t16']}
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				)}
			</Flex>
			{animation}
			{image && (
				<Image
					src={image.file.url}
					width="90%"
					mobile={['fluid']}
				/>
			)}
		</Flex>
	);
};

export default ImageBlock;
