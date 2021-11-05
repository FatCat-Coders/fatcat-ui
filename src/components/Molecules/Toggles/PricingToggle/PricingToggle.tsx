import React from 'react';

// Molecules
import PricingToggleButton from './PricingToggleButton';

type ToggleProps = {
    isActive?: boolean,
    onClick?: () => void,
}

const PricingTToggle: React.FC<ToggleProps> = (props) => {
	const {
		onClick,
		isActive,
	} = props;

	return (
		<PricingToggleButton
			parentOnClick={onClick}
			isActive={isActive}
		/>
	);
};

export default PricingTToggle;
