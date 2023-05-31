import React, { useState, useMemo, useEffect } from 'react';
import { Properties } from 'csstype';
import { useTheme, DefaultTheme, CSSProp } from 'styled-components';

// Atoms
import { Center } from '../../Atoms/Center';
import { RatingItem, Star } from './Ratings.atoms';

export type TRatings = {
	rating?: number | null
	getRating?: (value: number) => void
	maxRating?: number
	gap?: Properties['gap']
	backgroundColor?: DefaultTheme['backgroundColor']
	starColor?: DefaultTheme['backgroundColor']
	starBorder?: DefaultTheme['color']
	size?: string
	styled?: CSSProp
}

const Ratings: React.FC<TRatings> = (props) => {
	const {
		rating,
		getRating,
		maxRating,
		gap,
		backgroundColor,
		starColor,
		starBorder,
		size,
		styled,
	} = props;
	const theme = useTheme();
	const [value, setValue] = useState(rating || 0);
	const [hoverValue, setHoverValue] = useState(0);

	useEffect(() => {
		setValue(rating || 0);
	}, [rating]);

	const handleLeave = () => {
		setHoverValue(0);
	};
	const handleHover = (i: number): void => {
		setHoverValue(i);
	};
	const handleClick = (i: number): void => {
		setValue(i);
		if (getRating && i !== value) {
			getRating(i);
		}
	};

	const selectedStarColor = theme.backgroundColor[starColor];
	const fullStars = useMemo(() => Math.floor(rating ? value : hoverValue || value), [rating, value, hoverValue]);
	const halfFilledStar = useMemo(() => +(value % 1).toFixed(2) * 100, [value]);

	return (
		<Center
			maxW="fit-content"
			h="fit-content"
			gap={gap}
			backgroundColor={backgroundColor}
			onMouseLeave={!rating ? handleLeave : undefined}
			styled={styled}
		>
			{[...Array(maxRating).keys()].map((i, index) => {
				// fill up stars color with a determined rating
				let starBackground;
				switch (true) {
					case (index + 1 <= fullStars):
						starBackground = selectedStarColor;
						break;
					case (index + 1 > fullStars + 1):
						starBackground = undefined;
						break;
					default:
						starBackground = `linear-gradient(to right, ${selectedStarColor} ${halfFilledStar}%, transparent ${halfFilledStar}%)`;
				}
				return (
					<RatingItem
						key={index} // eslint-disable-line
						backgroundGradient={starBackground}
						backgroundRepeat="no-repeat"
						hover={!rating ? ['pointer'] : undefined}
						onClick={!rating ? () => handleClick(index + 1) : undefined}
						onMouseEnter={!rating ? () => handleHover(index + 1) : undefined}
						pop={!rating && value === index + 1}
					>
						<Star
							viewBox="0 0 130 130"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							w={size}
							h={size}
							position="relative"
							zIndex={1}
						>
							<path
								d="m57.354 5.908-.004.008-15.074 32.17-34.091 5.08h-.01c-6.98 1.12-9.584 10.045-4.561 15.284l.007.007L27.972
								83.37l-5.798 35.075-.001.009-.002.009c-1.066 7.226 6.372 12.786 12.524 9.438l.003-.001 30.38-16.691 30.146 16.688.006.004c6.153
								3.348 13.59-2.212 12.523-9.438l-.001-.009-.002-.009-5.798-35.075 24.352-24.914.007-.007c5.023-5.239
								2.42-14.163-4.56-15.283l-.01-.002-33.86-5.08-15.302-32.16-.003-.008c-2.951-6.421-12.021-6.686-15.222-.01Z"
								stroke={theme.color[starBorder]}
								strokeWidth="4"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M130 0H0v130h130V53.72a9.77 9.77 0 0 1-2.5 5.28L103 84l6 34.5c.972 6.599-6 14-14 10.5l-30-16.5-31 17c-6.5
							 	2-13.5-3-13-10.5l6-35L2.5 59C-2.12 54.178 0 43.5 7 42.5L41.5 37 57 4.5c2.918-6.091 13.326-5.838 16 0L88.5
							  	37l33.605 5.094c4.216.602 7.307 4.437 7.895 8.702V0Z"
								fill={theme.backgroundColor[backgroundColor]}
							/>
						</Star>
					</RatingItem>
				);
			})}
		</Center>
	);
};

Ratings.defaultProps = {
	rating: null,
	maxRating: 5,
	getRating: undefined,
	size: '24px',
	gap: '8px',
	backgroundColor: 'white',
	starColor: 'yellow',
	starBorder: 'grey',
	styled: undefined,
};

export default Ratings;
