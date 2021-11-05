import React, { useContext, useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Global atoms
import { Flex, Wrapper } from '../../Atoms';

// Molecules
import Logo from '../../Molecules/Generic/Logo/Logo';
import Navbar from '../../Molecules/Generic/Navbar/Navbar';
import Section from '../../Molecules/Section/Section';
import HamburgerMenu from '../../Molecules/Generic/HamburgerMenu/HamburgerMenu';
import MobileMenu from '../../Molecules/Generic/MobileMenu/MobileMenu';

// Context
import { HamburgerMenuContextData } from '../../../context/HamburgerMenuContext';
import { HeaderWrapper } from './Header.atoms';

const Header = () => {
	// @ts-ignore
	const [isOpenMenu, setIsOpenMenu] = useContext(HamburgerMenuContextData);

	const [showShadow, setShowShadow] = useState(false);

	function handleShadowChange() {
		if (!isOpenMenu) {
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (!showShadow && scrollTop > 24) {
				setShowShadow(true);
			} else if (showShadow && scrollTop <= 24) {
				setShowShadow(false);
			}
		}
	}

	// @ts-ignore
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleShadowChange);

			return () => window.removeEventListener('scroll', handleShadowChange);
		}

		return null;
	}, [showShadow]); // eslint-disable-line

	const data = useStaticQuery(graphql`
        query HeaderMenuQuery {
            contentfulNavigation(identifier: {eq: "Navigation"}) {
                items {
                    ...LinkFields
                    items {
                        ...LinkFields
                    }
                }
            }
        }
	`);

	const {
		contentfulNavigation: {
			items,
		},
	} = data;

	const isPositionFixed = isOpenMenu || showShadow;

	return (
		<HeaderWrapper
			position={isPositionFixed ? 'fixed' : 'absolute'}
			top="0px"
			zIndex={9999}
			backgroundColor={showShadow ? 'background' : 'transparent'}
			borderBottom={showShadow ? '2px solid #000000' : ''}
			isOpen={isOpenMenu}
		>
			<Section
				backgroundColor={!isOpenMenu ? 'transparent' : 'backgroundLighter'}
			>
				<Flex
					justifyContent="space-between"
					width="100%"
					padding={showShadow ? ['t8', 'b8'] : ['t32', 'b32']}
					hide="largeTablet"
				>
					<Logo />
					<Navbar items={items} />
				</Flex>
				<Flex
					show="largeTablet"
					height="100%"
					justifyContent="flex-start"
					direction="column"
				>
					<Flex
						justifyContent="space-between"
						alignItems="center"
						width="100%"
						padding={['t16', 'b16']}
						zIndex={9999}
					>
						<Logo />
						<HamburgerMenu
							isOpen={isOpenMenu}
							onChange={setIsOpenMenu}
						/>
					</Flex>
					{isOpenMenu && (
						<MobileMenu
							items={items}
						/>
					)}
				</Flex>
			</Section>
		</HeaderWrapper>
	);
};

export default Header;
