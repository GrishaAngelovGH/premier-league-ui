import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageFooter from './PageFooter'

test('should render PageFooter component', () => {
    const view = render(<PageFooter />, { wrapper: MemoryRouter })

    expect(view).toMatchSnapshot()
})