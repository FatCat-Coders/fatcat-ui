import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FontAwesome
import {
	faPlus, faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Theme
import { COLOR } from '../../../../theme/definitions';

// Atoms
import {
	Flex, Heading, Paragraph, Wrapper,
} from '../../../Atoms';

type TFAQ = {
	question: string;
	answer: string;
}

const FAQ: React.FC<TFAQ> = (props) => {
	const {
		question,
		answer,
	} = props;
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<Flex
			direction="column"
		>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				padding={['b12']}
				onClick={() => setShowAnswer(!showAnswer)}
				hover={['pointer']}
			>
				<Heading
					as="h5"
					fontWeight="normal"
					margin={['r20']}
					textColor={showAnswer ? 'yellow' : 'primary'}
				>
					{question}
				</Heading>
				{showAnswer ?
					<FontAwesomeIcon cursor="pointer" icon={faTimes} color={COLOR.grey} />
					:
					<FontAwesomeIcon cursor="pointer" icon={faPlus} color={COLOR.grey} />}
			</Flex>
			<Wrapper
				borderBottom={`4px solid ${COLOR.white20}`}
				margin={['b20']}
			/>
			{showAnswer && (
				<Paragraph
					textSize="paragraph14"
				>
					{answer}
				</Paragraph>
			)}
		</Flex>
	);
};

export default FAQ;
