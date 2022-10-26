import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

import { Text } from '../../Atoms/Text';
import { Button } from '../../Atoms/Button';

import { TagWrapper, TTagWrapper, tagVariant } from './Tag.atoms';

export type TTag = {
	name: string
	content: string | React.ReactElement
	onClose?: (name: string) => void
	onClick?: (name: string) => void
	buttonColor?: keyof DefaultTheme['color']
	variant?: keyof typeof tagVariant
} & TTagWrapper;

const Tag: React.FC<TTag> = (props) => {
	const theme = useTheme();
	const {
		name,
		content,
		onClose,
		onClick,
		buttonColor,
		variant,
		...rest
	} = props;

	const handleClick = () => {
		if (onClick) {
			onClick(name);
		}
	};

	return (
		<TagWrapper
			as="span"
			display="inline-flex"
			alignItems="center"
			w="auto"
			textAlign="center"
			marginRight="s12"
			padding={['t8', 'r10', 'b8', 'l10']}
			variant={variant}
			{...rest}
		>
			<Text
				onClick={handleClick}
				textAlign="center"
				whiteSpace="nowrap"
				lineHeight="s100"
			>
				{content}
			</Text>
			{onClose && (
				<Button
					type="button"
					aria-roledescription="button"
					onClick={() => onClose(name)}
					variant="noStyle"
					display="inline-flex"
					alignItems="center"
					hover={['pointer']}
					marginLeft="s8"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						fill={theme.color[buttonColor]}
					>
						<path
							d="m8.5 7.097 2.806-2.806a.992.992 0 1 1 1.403 1.403L9.903 8.5l2.806 2.806a.992.992 0 1 1-1.403
							1.403L8.5 9.903 5.694 12.71a.992.992 0 1 1-1.403-1.403L7.097 8.5 4.29 5.694A.992.992 0 1 1 5.694
							4.29L8.5 7.097Z"
						/>
					</svg>
				</Button>
			)}
		</TagWrapper>
	);
};

Tag.defaultProps = {
	onClose: undefined,
	onClick: undefined,
	buttonColor: 'grey',
	variant: 'base',
};

export default Tag;
