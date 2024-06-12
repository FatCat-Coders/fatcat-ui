import React, { useState, useId } from 'react';
import { DefaultTheme, CSSProp } from 'styled-components';

import { Paragraph } from '../../Atoms/Paragraph';

import {
	AccordionContent,
	AccordionTitle,
	AccordionWrapper,
	Plus,
	Arrow,
} from './Accordion.atoms';

export type TAccordion = {
	titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	title: string | React.ReactElement
	titleColor?: keyof DefaultTheme['textColor']
	content: string | React.ReactElement
	contentSize?: keyof DefaultTheme['textSize']
	contentColor?: keyof DefaultTheme['textColor']
	useArrow?: boolean
	styled?: CSSProp
}

function Accordion(props: TAccordion) {
	const {
		titleAs,
		title,
		titleColor,
		content,
		contentSize,
		contentColor,
		useArrow,
		styled,
	} = props;
	const id = useId();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<AccordionWrapper styled={styled}>
			<AccordionTitle as={titleAs} textColor={titleColor}>
				<button
					id={`accordion-title-${id}`}
					aria-controls={`accordion-content-${id}`}
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{title}
					{useArrow ? (
						<Arrow
							isOpen={isOpen}
							xmlns="http://www.w3.org/2000/svg"
							width="9" height="6"
							viewBox="0 0 9 6"
							fill="#767986"
							focusable="false"
						>
							<path
								d="M7.97267 0.431484C8.20411 0.188471 8.57935 0.188471 8.81079 0.431484C9.04224 0.674497 9.04224 1.0685 8.81079
								 1.31151L5.25494 5.04516C5.03058 5.28074 4.66932 5.28898 4.43542 5.06385L0.879566 1.64135C0.63829 1.40912
								  0.621986 1.01549 0.843155 0.762149C1.06432 0.508809 1.43921 0.491695 1.68049 0.723923L4.81805 3.74383L7.97267 0.431484Z"
							/>
						</Arrow>
					) : <Plus isOpen={isOpen} />}
				</button>
			</AccordionTitle>
			<AccordionContent
				id={`accordion-content-${id}`}
				aria-labelledby={`accordion-title-${id}`}
				isOpen={isOpen}
			>
				<Paragraph
					padding={['t16', 'r8', 'b16', 'l8']}
					textColor={contentColor}
					textSize={contentSize}
				>
					{content}
				</Paragraph>
			</AccordionContent>
		</AccordionWrapper>
	);
}

Accordion.defaultProps = {
	titleAs: 'h2',
	useArrow: false,
	titleColor: 'primary600',
	contentColor: 'primary600',
	contentSize: 'text1',
	styled: undefined,
};

export default Accordion;
