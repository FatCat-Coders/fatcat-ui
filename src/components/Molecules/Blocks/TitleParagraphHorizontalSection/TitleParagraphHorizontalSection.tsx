import React, { ReactElement } from 'react';

// Atoms
import { Flex, Paragraph } from '../../../Atoms';

type TTitleParagraphHorizontalSection = {
	title: string | ReactElement;
	paragraph: string | ReactElement;
	sameWidth?: boolean;
}
const TitleParagraphHorizontalSection: React.FC<TTitleParagraphHorizontalSection> = (props) => {
	const {
		title,
		paragraph,
		sameWidth,
	} = props;

	return (
		<Flex
			justifyContent="space-between"
			tablet={['flexWrap']}
		>
			<Paragraph
				width={sameWidth ? '45%' : '30%'}
				fontSize="s28"
				tablet={['fluid',
					{
						fontSize: 's24',
					}, {
						padding: ['b24'],
					}]}
			>
				{title}
			</Paragraph>
			<Paragraph
				maxWidth={sameWidth ? '45%' : '60%'}
				tablet={['fluid', {
					fontSize: 's16',
				}]}
			>
				{paragraph}
			</Paragraph>
		</Flex>
	);
};

export default TitleParagraphHorizontalSection;
