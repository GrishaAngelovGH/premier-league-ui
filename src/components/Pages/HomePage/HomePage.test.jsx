import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './HomePage'

test('should render HomePage component', () => {
    const view = render(<HomePage />, { wrapper: MemoryRouter })

    expect(view).toMatchSnapshot()
})