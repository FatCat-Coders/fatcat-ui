import React from 'react';

// Types
import { TContentfulAsset } from '../../../../types';

// Atoms
import {
	Flex, Heading, Image, Wrapper,
} from '../../../Atoms';

type PartnersType = {
	title: string,
	partners: TContentfulAsset[],
}

const Partners: React.FC<PartnersType> = (props) => {
	const {
		title,
		partners,
	} = props;
	return (
		<Wrapper
			height="auto"
		>
			<Heading
				as="h6"
				textColor="secondary"
				padding={['b56']}
				uppercase
				textAlign="center"
			>
				{title}
			</Heading>
			<Flex
				justifyContent="center"
			>
				<Flex
					justifyContent="space-around"
					alignItems="flex-end"
					gap="20px"
					tablet={['flexWrap']}
				>
					{partners.map(partner => (
						<Image
							src={partner.file.url}
							width="auto"
							maxHeight="45px"
						/>
					))}
				</Flex>
			</Flex>
		</Wrapper>
	);
};

export default Partners;
