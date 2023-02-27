import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Menu from './Menu'

test('should render Menu component', () => {
    const view = render(<Menu />, { wrapper: MemoryRouter })

    expect(view).toMatchSnapshot()
})