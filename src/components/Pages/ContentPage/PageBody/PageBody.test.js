import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PageBody from './PageBody'

test('should render ContentPage/PageBody component', () => {
    const view = render(
        <MemoryRouter initialEntries={['/matches']}>
            <PageBody />
        </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
})