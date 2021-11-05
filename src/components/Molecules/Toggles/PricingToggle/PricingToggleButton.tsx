import React from 'react';

// Atoms
import { Button } from './ToggleButton.atoms';
import { Flex, Wrapper } from '../../../Atoms';

type ToggleButtonProps = {
    isActive?: boolean,
    parentOnClick?: () => void,
}
const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
	const {
		parentOnClick,
		isActive,
	} = props;

	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			borderRadius="4px"
		>
			<Wrapper
				borderRadius="4px"
				overflow="hidden"
				width="fit-content"
			>
				<Button
					onClick={parentOnClick}
					isOn={isActive}
				>
					Monthly
				</Button>
				<Button
					onClick={parentOnClick}
					isOn={!isActive}
				>
					Annual
				</Button>
			</Wrapper>
		</Flex>
	);
};

export default ToggleButton;
