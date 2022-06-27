import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageFooter from './PageFooter'

test('should render component', () => {
    const container = render(<PageFooter />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})