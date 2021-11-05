import React from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Atoms
import { CarouselWrapper } from './Carousel.atoms';

const Carousel: React.FC = (props) => {
	const {
		children,
	} = props;

	return (
		<CarouselWrapper>
			<Splide
				options={{
					type: 'loop',
					gap: '1rem',
					focus: 'center',
					autoHeight: true,
					autoWidth: true,
					pagination: false,
				}}
			>
				{children}
			</Splide>
		</CarouselWrapper>
	);
};

export default Carousel;
