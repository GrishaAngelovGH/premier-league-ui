import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ContentPage from './ContentPage'

test('should render ContentPage component', () => {
    const view = render(
        <MemoryRouter initialEntries={['/matches']}>
            <ContentPage />
        </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
})