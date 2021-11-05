import React from 'react';

// Types
import { TContentfulComponentCategory } from '../../../../types';

// Atoms
import { Flex, Link, Wrapper } from '../../../Atoms';

type TCategories = {
    categories: TContentfulComponentCategory[]
	selectedCategory: TContentfulComponentCategory
	onSelectCategory: (category: TContentfulComponentCategory) => void
}
const Categories: React.FC<TCategories> = (props) => {
	const {
		categories,
		selectedCategory,
		onSelectCategory,
	} = props;

	return (
		<Flex
			position="sticky"
			top="60px"
			height="fit-content"
			maxWidth="20%"
			direction="column"
			tablet={['row', 'unsetPosition', 'autoWidth',
				{
					padding: ['r16'],
				},
				{
					maxWidth: 'unset',
				},
			]}
		>
			{categories.map(category => (
				<Wrapper
					padding={['b32']}
					tablet={[{
						padding: ['r32'],
					}]}
				>
					<Link
						type="filter"
						className={category.slug === selectedCategory.slug ? 'active' : ''}
						onClick={() => {
							onSelectCategory(category);
						}}
						href={`#${category.slug}`}
					>
						{category.name}
					</Link>
				</Wrapper>
			))}
		</Flex>
	);
};

export default Categories;
