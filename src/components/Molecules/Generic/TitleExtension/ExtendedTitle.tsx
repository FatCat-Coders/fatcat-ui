import React from 'react';

// Atoms
import {
	Paragraph,
} from '../../../Atoms';
import { TitleExtension } from '../TitleExtension/TitleExtension.atoms';

type TitleExtensionProps = {
	extension: string;
};
const ExtendedTitle: React.FC<TitleExtensionProps> = (props) => {
	const {
		extension,
	} = props;

	return (
		<Paragraph>
			<TitleExtension>
				{extension}
			</TitleExtension>
		</Paragraph>
	);
};

export default ExtendedTitle;
