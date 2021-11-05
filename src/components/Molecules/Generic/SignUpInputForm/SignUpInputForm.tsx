import React from 'react';

// Assets
import { TContentfulLink } from '../../../../types';

// Atoms
import { Button, Flex, Wrapper } from '../../../Atoms';
import { InputField } from '../../../Atoms/Input/Input';

type TSignUpInputForm = {
	to: string
	title: string
}

const SignUpInputForm: React.FC<TSignUpInputForm> = (props) => {
	const {
		to,
		title,
	} = props;

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			tablet={['flexWrap']}
			as="form"
			action={to}
			method="post"
		>
			<InputField
				placeholder="ENTER YOUR EMAIL"
				borderRadius="4px 0px 0px 4px"
				borderRight="none"
				tablet={['fluid', 'textCenter',
					{
						setBorderRight: '1px solid white',
					},
					{
						setBorderRadius: '4px',
					},
				]}
				maxWidth="320px"
				width="100%"
			/>
			<Wrapper
				width="auto"
				tablet={[{
					width: '100%',
				}, {
					padding: ['t24'],
				}]}
			>
				<Button
					borderRadius="0px 4px 4px 0px"
					tablet={[
						{
							width: '100%',
						},
						{
							setBorderRadius: '4px',
						},
					]}
				>
					{title}
					{' '}
					→
				</Button>
			</Wrapper>
		</Flex>
	);
};

export default SignUpInputForm;
