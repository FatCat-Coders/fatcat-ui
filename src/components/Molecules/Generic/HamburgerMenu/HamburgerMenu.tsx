import React from 'react';

// Local atoms
import {
	HamburgerMenuWrapper, HamburgerMenuBarTop, HamburgerMenuBarBottom, HamburgerMenuBarCenter,
} from './HamburgerMenu.atoms';

type HamburgerMenuProps = {
    isOpen: boolean,
    onChange: (isOpen: boolean) => void
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
	const {
		isOpen,
		onChange,
	} = props;
	return (
		<HamburgerMenuWrapper
			className={isOpen ? 'active' : ''}
			onClick={() => {
				onChange(!isOpen);
			}}
		>
			<HamburgerMenuBarTop />
			<HamburgerMenuBarCenter />
			<HamburgerMenuBarBottom />
		</HamburgerMenuWrapper>
	);
};
export default HamburgerMenu;
