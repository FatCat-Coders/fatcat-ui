import React from 'react';
import styled from 'styled-components';

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
		display:inline-flex;
		align-items:center;
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
				<button
					type="button"
					aria-roledescription="button"
					onClick={onClose}
				>
					<svg
						width="16"
						height="16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m8.5 7.097 2.806-2.806a.992.992 0 1 1 1.403 1.403L9.903 8.5l2.806 2.806a.992.992 0 1 1-1.403
							1.403L8.5 9.903 5.694 12.71a.992.992 0 1 1-1.403-1.403L7.097 8.5 4.29 5.694A.992.992 0 1 1 5.694
							4.29L8.5 7.097Z"
							fill="#B8BBC5"
						/>
					</svg>
				</button>
			)}
		</TagWrapper>
	);
};

Tag.defaultProps = {
	onClose: undefined,
};
