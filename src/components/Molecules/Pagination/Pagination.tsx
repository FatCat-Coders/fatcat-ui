import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Atoms
import {
	Flex, Link, Wrapper,
} from '../../Atoms';

export type TPagination = {
	currentPage: number,
	numberOfPages: number,
	baseURL: string,
}

const Pagination: React.FC<TPagination> = (props) => {
	const {
		currentPage,
		numberOfPages,
		baseURL,
	} = props;

	// No pages, no pagination
	if (numberOfPages === 1) {
		return null;
	}

	const pages = currentPage > 2 ? [currentPage - 1, currentPage, currentPage + 1] : [1, 2, 3];

	const prevButtonLink = `${baseURL}${currentPage - 1 <= 1 ? '' : currentPage - 1}`;
	const nextButtonLink = `${baseURL}${currentPage + 1}`;

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
		>
			{currentPage > 1 && (
				<Wrapper
					padding={['r20']}
					width="auto"
				>
					<Link
						as={GatsbyLink}
						type="white50"
						to={prevButtonLink}
						href={prevButtonLink}
					>
						Prev
					</Link>
				</Wrapper>
			)}
			{pages.map(page => page <= numberOfPages && (
				<Wrapper
					padding={['r20']}
					width="auto"
				>
					<Link
						as={GatsbyLink}
						type="white50"
						className={currentPage === page ? 'active' : ''}
						to={`${baseURL}${page <= 1 ? '' : page}`}
						href={`${baseURL}${page <= 1 ? '' : page}`}
					>
						{page}
					</Link>
				</Wrapper>
			))}
			{(currentPage < numberOfPages) && (
				<Link
					as={GatsbyLink}
					type="white50"
					to={nextButtonLink}
					href={nextButtonLink}
				>
					Next
				</Link>
			)}
		</Flex>
	);
};

export default Pagination;
