import { render } from '@testing-library/react'

import Standings from './Standings'

test('should render Standings component', () => {
	const standingItems = [
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
	]

	const view = render(<Standings standingItems={standingItems} />)

	expect(view).toMatchSnapshot()
})