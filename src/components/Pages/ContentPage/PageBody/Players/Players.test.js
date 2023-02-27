import { render } from '@testing-library/react'

import Players from './Players'

test('should render Players component', () => {
    const view = render(<Players />)

    expect(view).toMatchSnapshot()
})