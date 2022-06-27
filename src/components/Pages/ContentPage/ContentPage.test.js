import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ContentPage from './ContentPage'

test('should render component', () => {
    const container = render(
        <MemoryRouter initialEntries={['/matches']}>
            <ContentPage />
        </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
})