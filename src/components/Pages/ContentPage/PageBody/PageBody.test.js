import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageBody from './PageBody'

test('should render component', () => {
    const container = render(
        <MemoryRouter initialEntries={['/matches']}>
            <PageBody />
        </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
})