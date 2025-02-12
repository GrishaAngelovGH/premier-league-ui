import { render } from '@testing-library/react'

import Timetable from './Timetable'

test('should render Timetable component', () => {
	const content = [
		[
			{
				id: '11',
				firstTeam: { image: 'crystalPalace', name: 'Crystal Palace', score: 0 },
				secondTeam: { image: 'newcastle', name: 'Newcastle', score: 2 },
				day: 'FT',
				time: 'Yesterday'
			},
			{
				id: '22',
				firstTeam: { image: 'brighton', name: 'Brighton', score: 1 },
				secondTeam: { image: 'liverpool', name: 'Liverpool', score: 3 },
				day: 'FT',
				time: 'Yesterday'
			},
		]
	]

	const view = render(<Timetable content={content} />)

	expect(view).toMatchSnapshot()
})