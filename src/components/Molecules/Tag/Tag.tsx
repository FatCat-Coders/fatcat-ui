import React from 'react';
import { TagWrapper, TTagWrapper } from './Tag.atoms';
import { Text } from '../../Atoms/Text/Text.stories';

export type TTagProps = {
	tagName: string;
	onClose?: (tagName: string) => void;
	onClick?: (tagName: string) => void;
} & TTagWrapper;

export const Tag = (props: TTagProps) => {
	const {
		tagName,
		onClose,
		onClick,
		background,
		textColor,
	} = props;

	const handleClick = () => {
		if (onClick) {
			onClick(tagName);
		}
	};

	return (
		<TagWrapper background={background} textColor={textColor}>
			<Text onClick={handleClick}>{tagName}</Text>
			{onClose && (
				<button
					type="button"
					aria-roledescription="button"
					onClick={() => onClose(tagName)}
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
	onClick: undefined,
};
