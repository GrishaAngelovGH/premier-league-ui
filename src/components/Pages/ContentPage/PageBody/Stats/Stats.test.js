import { render } from '@testing-library/react'

import Stats from './Stats'

test('should render component', () => {
    const statsItems = [
        { position: 1, playerName: 'Dominic Calvert-Lewin', teamImage: 'img1', team: 'Eveton', goals: 10 },
    ]

    const container = render(<Stats statsItems={statsItems} />)

    expect(container).toMatchSnapshot()
})