import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'
import AppContext from 'context'

import { news } from 'images'

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
  ],
  [
    {
      id: '33',
      firstTeam: { image: 'manCity', name: 'Man. City', score: 2 },
      secondTeam: { image: 'burnley', name: 'Burnley', score: 1 },
      day: 'FT',
      time: 'Yesterday'
    },
    {
      id: '44',
      firstTeam: { image: 'everton', name: 'Everton', score: -1 },
      secondTeam: { image: 'leeds', name: 'Leeds United', score: -1 },
      day: 'Today',
      time: '19:30'
    },
  ],
  [
    {
      id: '55',
      firstTeam: { image: 'westBrom', name: 'West Brom', score: -1 },
      secondTeam: { image: 'sheffield', name: 'Sheffield United', score: -1 },
      day: 'Today',
      time: '22:00'
    },
    {
      id: '66',
      firstTeam: { image: 'southampton', name: 'Southampton', score: -1 },
      secondTeam: { image: 'manUtd', name: 'Man United', score: -1 },
      day: 'Tomorrow',
      time: '16:00'
    }
  ]
]

const newsItems = [
  {
    title: 'Guardiola rules out new Manchester City signings in January',
    source: 'Goal.com',
    time: '4 days ago',
    image: news['news1']
  },
  {
    title: `'Welbeck said it wasn't a penalty!' – Henderson fumes at VAR after 
        Liverpool are held by Brighton`,
    source: 'Goal.com',
    time: '3 days ago',
    image: news['news2']
  },
  {
    title: 'Chelsea 0-0 Tottenham Hotspur: Spurs return to the top of the Premier League',
    source: 'BBC News',
    time: '2 days ago',
    image: news['news3']
  },
  {
    title: 'Return of supporters to Stamford Bridge | Official Site | Chelsea Football Club',
    source: 'Chelsea FC',
    time: '5 days ago',
    image: news['news4']
  }
]

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={(
          <AppContext.Provider value={{ matches }}>
            <HomePage />
          </AppContext.Provider>
        )} />
        <Route path='/content/*' element={(
          <AppContext.Provider value={{ matches, newsItems }}>
            <ContentPage />
          </AppContext.Provider>
        )} />
      </Routes>
    </Router>
  )
}

export default App
