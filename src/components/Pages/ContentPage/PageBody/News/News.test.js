import { render } from '@testing-library/react'

import News from './News'

test('should render component', () => {
    const newsItems = [
        {
            title: 'Guardiola rules out new Manchester City signings in January',
            source: 'Goal.com',
            time: '4 days ago',
            image: 'news1'
        }
    ]

    const container = render(<News newsItems={newsItems} />)

    expect(container).toMatchSnapshot()
})