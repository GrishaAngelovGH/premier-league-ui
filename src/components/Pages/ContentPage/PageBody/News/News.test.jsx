import { render } from '@testing-library/react'
import AppContext from 'context'

import News from './News'

test('should render News component', () => {
	const newsItems = [
		{
			title: 'Guardiola rules out new Manchester City signings in January',
			source: 'Goal.com',
			time: '4 days ago',
			image: 'news1'
		}
	]

	const view = render(
		<AppContext.Provider value={{ newsItems }}>
			<News />
		</AppContext.Provider>
	)

	expect(view).toMatchSnapshot()
})