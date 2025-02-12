import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppContext from "context"

import PageBody from './PageBody'

test('should render ContentPage/PageBody component', () => {
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
				firstTeam: { image: 'brighton', name: 'Brighton', score: 1 },
				secondTeam: { image: 'liverpool', name: 'Liverpool', score: 3 },
				day: 'FT',
				time: 'Yesterday'
			},
		]
	]

	const view = render(
		<MemoryRouter initialEntries={['/matches']}>
			<AppContext.Provider value={{ matches }}>
				<PageBody />
			</AppContext.Provider>
		</MemoryRouter>
	)

	expect(view).toMatchSnapshot()
})