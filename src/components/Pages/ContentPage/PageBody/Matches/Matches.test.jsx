import { render } from '@testing-library/react'
import AppContext from "context"

import Matches from './Matches'

test('should render Matches component', () => {
  const matches = [
    [
      {
        id: '11',
        firstTeam: { image: 'crystalPalace', name: 'Crystal Palace', score: 0 },
        secondTeam: { image: 'newcastle', name: 'Newcastle', score: 2 },
        day: 'FT',
        time: 'Yesterday'
      },
      {
        id: '22',
        firstTeam: { image: 'brighton', name: 'Brighton', score: 1 },
        secondTeam: { image: 'liverpool', name: 'Liverpool', score: 3 },
        day: 'FT',
        time: 'Yesterday'
      },
    ]
  ]

  const view = render(
    <AppContext.Provider value={{ matches }}>
      <Matches />
    </AppContext.Provider>
  )

  expect(view).toMatchSnapshot()
})