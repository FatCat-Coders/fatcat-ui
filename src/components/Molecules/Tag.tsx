import { Properties } from 'csstype';
import React from 'react';
import styled from 'styled-components';

type TTagWrapper = {
	background?: Properties['background'];
	textColor?: Properties['color'];
};

export const TagWrapper = styled.div<TTagWrapper>`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	color: ${props => props.textColor || props.theme.textColor.secondary};
	background-color:${props=> props.background || props.theme.color.lightGrey};
	padding: ${props => props.theme.space.s8} ${props => props.theme.space.s10};
	width: auto;
	text-align: center;
	margin-right: 12px;
	& > p {
		font-size: inherit;
		margin: 0;
		line-height: 1;
		white-space: nowrap;
		text-align: center;
	}

	& > button {
		display: inline-flex;
		align-items: center;
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
} & TTagWrapper;

export const Tag = (props: TTagProps) => {
	const {
		tagName,
		onClose,
		background,
		textColor,
	} = props;
	return (
		<TagWrapper background={background} textColor={textColor}>
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
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						fill="#B8BBC5"
					>
						<path
							d="m8.5 7.097 2.806-2.806a.992.992 0 1 1 1.403 1.403L9.903 8.5l2.806 2.806a.992.992 0 1 1-1.403
							1.403L8.5 9.903 5.694 12.71a.992.992 0 1 1-1.403-1.403L7.097 8.5 4.29 5.694A.992.992 0 1 1 5.694
							4.29L8.5 7.097Z"
						/>
					</svg>
				</button>
			)}
		</TagWrapper>
	);
};

Tag.defaultProps = {
	onClose: undefined,
	background: undefined,
	textColor: undefined,
};
