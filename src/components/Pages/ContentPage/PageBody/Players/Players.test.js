import { render } from '@testing-library/react'

import Players from './Players'

test('should render component', () => {
    const container = render(<Players />)

    expect(container).toMatchSnapshot()
})