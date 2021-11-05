// @ts-nocheck
import React from 'react';

// Assets
import darkBlueHomeHeroTop from '../../../assets/images/Wrappers/dark-blue-home-hero-top.svg';
import darkBlueHomeHeroBottom from '../../../assets/images/Wrappers/dark-blue-home-hero-bottom.svg';
import darkBlueTopTestimonial from '../../../assets/images/Wrappers/dark-blue-testimonials-top.svg';
import darkBlueBottomTestimonial from '../../../assets/images/Wrappers/dark-blue-testimonials-bottom.svg';
import darkBlueTopMidCTA from '../../../assets/images/Wrappers/dark-blue-mid-cta-top.svg';
import darkBlueBottomMidCTA from '../../../assets/images/Wrappers/dark-blue-mid-cta-bottom.svg';
import darkBlueCtaReverseTop from '../../../assets/images/Wrappers/dark-blue-cta-reverse-top.svg';
import darkBlueCtaReverseBottom from '../../../assets/images/Wrappers/dark-blue-mid-cta-bottom.svg';
import yellowHeroTop from '../../../assets/images/Wrappers/yellow-hero-top.svg';
import yellowHeroBottom from '../../../assets/images/Wrappers/yellow-hero-bottom.svg';
import yellowMidSectionTop from '../../../assets/images/Wrappers/yellow-mid-section-top.svg';
import yellowMidSectionBottom from '../../../assets/images/Wrappers/yellow-mid-section-bottom.svg';
import yellowPricingTop from '../../../assets/images/Wrappers/yellow-pricing-top.svg';
import yellowPricingBottom from '../../../assets/images/Wrappers/yellow-pricing-bottom.svg';
import purpleHeroTop from '../../../assets/images/Wrappers/purple-hero-top.svg';
import purpleHeroBottom from '../../../assets/images/Wrappers/purple-hero-bottom.svg';
import purplePricingTop from '../../../assets/images/Wrappers/purple-pricing-top.svg';
import purplePricingBottom from '../../../assets/images/Wrappers/purple-pricing-bottom.svg';
import lightBlueHeroTop from '../../../assets/images/Wrappers/light-blue-hero-top.svg';
import lightBlueHeroBottom from '../../../assets/images/Wrappers/light-blue-hero-bottom.svg';
import greyHeroTop from '../../../assets/images/Wrappers/grey-hero-top.svg';
import greyHeroBottom from '../../../assets/images/Wrappers/grey-hero-bottom.svg';
import greyMidSectionTop from '../../../assets/images/Wrappers/grey-mid-section-top.svg';
import greyMidSectionBottom from '../../../assets/images/Wrappers/grey-mid-section-bottom.svg';
import greyMidCTATop from '../../../assets/images/Wrappers/grey-mid-cta-top.svg';
import greyMidCTABottom from '../../../assets/images/Wrappers/grey-mid-cta-bottom.svg';

// Types
import { ColorDefinition } from '../../../theme/definitions';
import { WrapperAtomProps } from '../../Atoms/Wrapper/Wrapper';

// Atoms
import { Image, Wrapper } from '../../Atoms';

type WrapperTypes = 'darkBlueHomeHero' | 'darkBlueTestimonial' | 'darkBlueMidCta' | 'darkBlueCTAReverse' | 'yellowHero' | 'yellowMidSection' | 'yellowPricing' | 'purpleHero' | 'purplePricing' | 'lightBlueHero' | 'greyHero' | 'greyHeroSingleTop' | 'greyMidSection' | 'greyMidCTA';

type WrapperGroups = Record<WrapperTypes, {
	top: string,
	bottom?: string,
	backgroundColor?: ColorDefinition
}>

const WRAPPER_GROUPS: WrapperGroups = {
	darkBlueHomeHero: {
		top: darkBlueHomeHeroTop,
		bottom: darkBlueHomeHeroBottom,
		backgroundColor: 'darkestBlue',
	},
	darkBlueTestimonial: {
		top: darkBlueTopTestimonial,
		bottom: darkBlueBottomTestimonial,
		backgroundColor: 'darkBlue',
	},
	darkBlueMidCta: {
		top: darkBlueTopMidCTA,
		bottom: darkBlueBottomMidCTA,
		backgroundColor: 'darkBlue',
	},
	darkBlueCTAReverse: {
		top: darkBlueCtaReverseTop,
		bottom: darkBlueCtaReverseBottom,
		backgroundColor: 'darkBlue',
	},
	yellowHero: {
		top: yellowHeroTop,
		bottom: yellowHeroBottom,
		backgroundColor: 'heroYellow',
	},
	yellowMidSection: {
		top: yellowMidSectionTop,
		bottom: yellowMidSectionBottom,
		backgroundColor: 'heroYellow',
	},
	yellowPricing: {
		top: yellowPricingTop,
		bottom: yellowPricingBottom,
		backgroundColor: 'heroYellow',
	},
	purpleHero: {
		top: purpleHeroTop,
		bottom: purpleHeroBottom,
		backgroundColor: 'heroPurple',
	},
	purplePricing: {
		top: purplePricingTop,
		bottom: purplePricingBottom,
		backgroundColor: 'heroPurple',
	},
	lightBlueHero: {
		top: lightBlueHeroTop,
		bottom: lightBlueHeroBottom,
		backgroundColor: 'heroLightBlue',
	},
	greyHero: {
		top: greyHeroTop,
		bottom: greyHeroBottom,
		backgroundColor: 'lightestGrey',
	},
	greyHeroSingleTop: {
		top: greyHeroBottom,
	},
	greyMidSection: {
		top: greyMidSectionTop,
		bottom: greyMidSectionBottom,
		backgroundColor: 'greyGradient',
	},
	greyMidCTA: {
		top: greyMidCTATop,
		bottom: greyMidCTABottom,
		backgroundColor: 'lightestGrey',
	},
};

type SectionWrapperType = {
	type: WrapperTypes
}

const SectionWrapper: React.FC<SectionWrapperType & WrapperAtomProps> = (props) => {
	const {
		children,
		type,
		...rest
	} = props;

	const selectedGroup = WRAPPER_GROUPS[type];

	return (
		<>
			<Image
				src={selectedGroup.top}
				style={{
					marginBottom: '-1px',
				}}
				minHeight="20px"
			/>
			<Wrapper
				background={selectedGroup.backgroundColor || 'white'}
				{...rest}
			>
				{children}
			</Wrapper>
			{selectedGroup.bottom && (
				<Image
					src={selectedGroup.bottom}
					style={{
						marginTop: '-1px',
					}}
					minHeight="20px"
				/>
			)}
		</>
	);
};

export default SectionWrapper;
