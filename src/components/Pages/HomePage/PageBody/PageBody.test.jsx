import { render } from '@testing-library/react'
import AppContext from "context"
import PageBody from './PageBody'

test('should render HomePage/PageBody component', () => {
	const matches = [
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
				firstTeam: { image: 'everton', name: 'Everton', score: -1 },
				secondTeam: { image: 'leeds', name: 'Leeds United', score: -1 },
				day: 'Today',
				time: '19:30'
			}
		]
	]

	const view = render(
		<AppContext.Provider value={{ matches }}>
			<PageBody />
		</AppContext.Provider>
	)

	expect(view).toMatchSnapshot()
})