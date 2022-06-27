import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './HomePage'

test('should render component', () => {
    const container = render(<HomePage />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})