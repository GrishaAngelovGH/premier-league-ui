import { render } from '@testing-library/react'

import Table from './Table'

test('should render Table component', () => {
	const view = render(
		<Table
			rows={[
				{
					position: 1,
					image: 'tottenham-image',
					title: 'Tottenham',
					mp: 10,
					w: 6,
					d: 3,
					l: 1,
					gf: 21,
					ga: 9,
					gd: 12,
					pts: 21,
					lastFive: ['d', 'w', 'w', 'w', 'w']
				}
			]}
			columns={['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5']}
		/>
	)

	expect(view).toMatchSnapshot()
})