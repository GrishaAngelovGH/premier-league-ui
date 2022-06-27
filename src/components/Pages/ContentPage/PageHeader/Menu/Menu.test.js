import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Menu from './Menu'

test('should render component', () => {
    const container = render(<Menu />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})