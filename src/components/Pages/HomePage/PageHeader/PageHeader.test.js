import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageHeader from './PageHeader'

test('should render component', () => {
    const container = render(<PageHeader />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})