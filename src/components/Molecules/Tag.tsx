import React from 'react';
import styled from 'styled-components';

// Atoms
import { Image } from '../Atoms/Image';

// Icons
import close from '../../icons/close.svg';

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	color: ${props => props.theme.textColor.secondary};
	background-color: #f5f5f5;
	padding: ${props => props.theme.space.s8} ${props => props.theme.space.s10};
	width: auto;
	text-align: center;
	margin-right: 12px;
	& > p {
		margin: 0;
		line-height: 1;
		white-space: nowrap;
		text-align: center;
	}

	& > button {
        cursor: pointer;
		border: none;
		padding: 0;
		margin-left: ${props => props.theme.space.s8};
		background-color: inherit;
	}
`;

export type TTagProps = {
	tagName: string;
	onClose?: () => void;
};
export const Tag = (props: TTagProps) => {
	const { tagName, onClose } = props;
	return (
		<TagWrapper>
			<p>{tagName}</p>
			{onClose && (
				<button type="button" aria-roledescription="button" onClick={onClose}>
					<Image src={close} alt="close" />
				</button>
			)}
		</TagWrapper>
	);
};

Tag.defaultProps = {
	onClose: undefined,
};
