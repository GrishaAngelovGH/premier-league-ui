import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageHeader from './PageHeader'

test('should render ContentPage/PageHeader component', () => {
	const view = render(
		<MemoryRouter>
			<PageHeader />
		</MemoryRouter>
	)

	expect(view).toMatchSnapshot()
})