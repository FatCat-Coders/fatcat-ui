import React from 'react';

// Types
import { TContentfulLink } from '../../../../types';

// Atoms
import { MobileMenuWrapper } from './MobileMenu.atoms';

// Components
import Navbar from '../Navbar/Navbar';
import { Button, Wrapper } from '../../../Atoms';

type TMobileMenu = {
	items: TContentfulLink[]
}

const MobileMenu: React.FC<TMobileMenu> = (props) => {
	const {
		items,
	} = props;

	return (
		<MobileMenuWrapper>
			<Navbar
				items={items}
				useTouch
			/>
			<Wrapper
				width="100%"
				padding={['b32']}
			>
				<Button
					as="a"
					href="https://app.monstercampaigns.com/c/yibohmuazdlc2py75bxd/"
					fontSize="s16"
					variant="signUp"
					width="100%"
				>
					SKIP THE LINE
				</Button>
			</Wrapper>
		</MobileMenuWrapper>
	);
};

export default MobileMenu;
