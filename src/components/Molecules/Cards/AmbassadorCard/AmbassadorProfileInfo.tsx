import React from 'react';

// Types
import { TContentfulAmbassador } from '../../../../types';

// Atoms
import {
	Flex, Image, Wrapper, Paragraph,
} from '../../../Atoms';

type TAmbassadorProfileInfo = Pick<TContentfulAmbassador, 'name' | 'company' | 'position' | 'photo'>

const AmbassadorProfileInfo: React.FC<TAmbassadorProfileInfo> = (props) => {
	const {
		photo,
		name,
		position,
		company,
	} = props;

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
		>
			<Wrapper
				minHeight="88px"
				minWidth="88px"
				maxHeight="88px"
				maxWidth="88px"
				borderRadius="50%"
				backgroundImage={photo.file.url}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
			/>
			<Wrapper
				paddingLeft="s24"
			>
				<Paragraph
					fontSize="s18"
					paddingBottom="s8"
				>
					{name}
				</Paragraph>
				<Paragraph
					fontSize="s14"
					textColorOpacity={0.7}
				>
					{position}
					{' '}
					{company}
				</Paragraph>
			</Wrapper>
		</Flex>
	);
};

export default AmbassadorProfileInfo;
