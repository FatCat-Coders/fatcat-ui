import React from 'react';

// assets
import heroImage from '../../../assets/images/Home/hero-image-grok.png';

import GenericHero from '../../Molecules/Heroes/GenericHero';

const HomeHero = () => {
	return (
		<GenericHero
			title="The way you work has changed, but the need for effective collaboration hasn't."
			description="Grok is an all-in-one collaboration platform, built to optimize the time you spend with your team so you can meet less and achieve more."
			buttonText="sign up now"
			disclaimer="it's free–no card required"
			image={heroImage}
			noInput
			smallerFont
		/>
	);
};

export default HomeHero;
