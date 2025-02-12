import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './HomePage'

test('should render HomePage component', () => {
	const view = render(
		<MemoryRouter>
			<HomePage />
		</MemoryRouter>
	)

	expect(view).toMatchSnapshot()
})