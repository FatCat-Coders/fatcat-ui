import React, { useContext, useState } from 'react';

// Types
import { TContentfulLink } from '../../../../types';

// Helpers
import { parseContentfulLink } from '../../../../utils/contentful';

// Local Atoms
import { NavbarDropdown, NavbarWrapper } from './Navbar.atoms';

// Global
import { Button, Link } from '../../../Atoms';
import { HamburgerMenuContextData } from '../../../../context/HamburgerMenuContext';

type TNavbar = {
	items: TContentfulLink[],
	useTouch?: boolean
}

const Navbar:React.FC<TNavbar> = (props) => {
	const {
		items,
		useTouch = false,
	} = props;

	// @ts-ignore
	const [, setIsOpenMenu] = useContext(HamburgerMenuContextData);

	const [clickedLink, setClickedLink] = useState('');

	const renderLink = (item: TContentfulLink, isSubLink = false) => {
		const parsedLink = parseContentfulLink(item);
		const hasSubLinks = item.items?.length > 0;

		const style: Record<any, any> = {
			display: 'none',
		};

		if (clickedLink === parsedLink.title) {
			style.display = 'flex';
		}

		const link = (
			<>
				<Link
					to={parsedLink.to}
					href={parsedLink.to}
					as={parsedLink.as}
					target={parsedLink.target}
					type="header"
					onClick={(e) => {
						if (useTouch) {
							if (clickedLink === parsedLink.title) {
								setClickedLink('');
							} else {
								setClickedLink(parsedLink.title);
							}
						}

						if (!hasSubLinks) {
							setIsOpenMenu(false);
						}

						if (parsedLink.to === '#') {
							e.preventDefault();
						}
					}}
				>
					{parsedLink.title}
				</Link>
				{hasSubLinks && (
					<NavbarDropdown
						style={useTouch ? style : {}}
					>
						{item.items.map(subItem => renderLink(subItem, true))}
					</NavbarDropdown>
				)}
			</>
		);

		if (isSubLink) {
			return link;
		}

		return (
			<li className={hasSubLinks ? 'arrow' : ''}>
				{link}
			</li>
		);
	};

	return (
		<NavbarWrapper>
			{items.map((item: TContentfulLink) => renderLink(item))}
			{/* <li */}
			{/*	className="button-menu-item" */}
			{/* > */}
			{/*	<Button */}
			{/*		margin={['l32']} */}
			{/*		desktop={[ */}
			{/*			{ */}
			{/*				margin: ['l16'], */}
			{/*			}, */}
			{/*		]} */}
			{/*		as={GatsbyLink} */}
			{/*		to="/sign-in" */}
			{/*		fontSize="s16" */}
			{/*		variant="signIn" */}
			{/*	> */}
			{/*		Sign in */}
			{/*	</Button> */}
			{/* </li> */}
			<li
				className="button-menu-item"
			>
				<Button
					as="a"
					href="https://app.monstercampaigns.com/c/yibohmuazdlc2py75bxd/"
					fontSize="s16"
					variant="signUp"
				>
					SKIP THE LINE
				</Button>
			</li>
		</NavbarWrapper>
	);
};

export default Navbar;
