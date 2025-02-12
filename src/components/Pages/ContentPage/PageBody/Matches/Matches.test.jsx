import { render } from '@testing-library/react'

import Matches from './Matches'

test('should render Matches component', () => {
    const view = render(<Matches />)

    expect(view).toMatchSnapshot()
})