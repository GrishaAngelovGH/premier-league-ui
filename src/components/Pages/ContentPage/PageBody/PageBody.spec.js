
import { Routes, Route, Navigate } from 'react-router-dom'

import Matches from './Matches'
import News, { newsItems } from './News'
import Standings, { standingItems } from './Standings'
import Stats, { statsItems } from './Stats'
import Players from './Players'

import PageBody from './PageBody'

describe('(Component) PageBody', () => {
    it('should render component', () => {
        const wrapper = shallow(<PageBody />)

        expect(wrapper.equals(
            <Routes>
                <Route path='/' element={<Navigate to='/content/matches' />} />
                <Route path='/matches' element={<Matches />} />
                <Route path='/news' element={<News newsItems={newsItems} />} />
                <Route path='/standings' element={<Standings standingItems={standingItems} />} />
                <Route path='/stats' element={<Stats statsItems={statsItems} />} />
                <Route path='/players' element={<Players />} />
            </Routes>
        )).to.equal(true)
    })
})