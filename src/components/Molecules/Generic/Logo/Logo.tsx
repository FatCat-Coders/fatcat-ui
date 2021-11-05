import React from 'react';
import { Link } from 'gatsby';

// Assets
import logo from '../../../../assets/images/logo.svg';

// Atoms
import { Image, Wrapper } from '../../../Atoms';

const Logo = () => {
	return (
		<Wrapper
			maxHeight="63px"
			width="auto"
		>
			<Link
				to="/"
				title="Grok Logo"
			>
				<Image
					src={logo}
					width="100%"
					maxWidth="140px"
					alt="Grok Logo"
					largeTablet={[
						{
							maxWidth: '90px',
						},
					]}
				/>
			</Link>
		</Wrapper>
	);
};

export default Logo;
