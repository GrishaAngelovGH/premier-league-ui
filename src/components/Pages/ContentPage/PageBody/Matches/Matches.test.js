import { render } from '@testing-library/react'

import Matches from './Matches'

test('should render component', () => {
    const container = render(<Matches />)

    expect(container).toMatchSnapshot()
})