
import { Routes, Route, Navigate } from 'react-router-dom'

import Matches from './Matches'
import News from './News'
import Standings, { standingItems } from './Standings'
import Stats, { statsItems } from './Stats'
import Players from './Players'

const PageBody = () => (
	<Routes>
		<Route path='/' element={<Navigate to='/content/matches' />} />
		<Route path='/matches' element={<Matches />} />
		<Route path='/news' element={<News />} />
		<Route path='/standings' element={<Standings standingItems={standingItems} />} />
		<Route path='/stats' element={<Stats statsItems={statsItems} />} />
		<Route path='/players' element={<Players />} />
	</Routes>
)

export default PageBody