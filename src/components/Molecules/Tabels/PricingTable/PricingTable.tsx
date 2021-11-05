import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Theme
import { COLOR } from '../../../../theme/definitions';

// Font Awesome
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Atoms
import { Wrapper } from '../../../Atoms';
import { Table } from '../../../Atoms/Table/Table';

const PricingTable = () => {
	const columnNames = ['Basic', 'Standard', 'Premium', 'Enterprise'];
	const rowNames = ['Admin & Support', 'Custom user permissions', 'Admin users', 'Dedicated account manager'];

	return (
		<Wrapper>
			<Table>
				<thead>
					<tr>
						<th>
							Admin Support
							<Wrapper
								borderBottom={`4px solid ${COLOR.yellow}`}
								maxWidth="120px"
								padding={['t12']}
							/>
						</th>
						{columnNames.map(columnName => (
							<th>{columnName}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowNames.map(rowName => (
						<tr>
							<th>
								{rowName}
							</th>
							<td>
								<FontAwesomeIcon
									icon={faCheck}
									size="xs"
								/>
							</td>
							<td>
								<FontAwesomeIcon
									icon={faCheck}
									size="xs"
								/>
							</td>
							<td>
								<FontAwesomeIcon
									icon={faCheck}
									size="xs"
								/>
							</td>
							<td>
								<FontAwesomeIcon
									icon={faCheck}
									size="xs"
								/>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Wrapper>
	);
};

export default PricingTable;
