import React from 'react';

// Types
import { TContentfulComponentCategory } from '../../../../types';

// Atoms
import {
	Button, Flex, Paragraph,
} from '../../../Atoms';

type TCategoriesPlaybooks = {
    categories: TContentfulComponentCategory[]
	selectedCategory: TContentfulComponentCategory
	onSelectCategory: (category: TContentfulComponentCategory) => void
}
const CategoriesPlaybooks: React.FC<TCategoriesPlaybooks> = (props) => {
	const {
		categories,
		selectedCategory,
		onSelectCategory,
	} = props;

	return (
		<Flex
			alignItems="center"
			tablet={['flexWrap']}
		>
			<Paragraph
				padding={['r24']}
				whiteSpace="nowrap"
				tablet={[{
					padding: ['b20'],
				}]}
			>
				Team
			</Paragraph>
			<Flex
				gap="20px"
				wrap
			>
				{categories.map(category => (
					<Button
						variant="tag"
						className={category.slug === selectedCategory.slug ? 'active' : ''}
						onClick={() => {
							window.location.hash = category.slug;
							onSelectCategory(category);
						}}
					>
						{category.name}
					</Button>
				))}
			</Flex>
		</Flex>
	);
};

export default CategoriesPlaybooks;
