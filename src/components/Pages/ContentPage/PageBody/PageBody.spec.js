
import { Switch, Route, Redirect } from 'react-router-dom'

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
            <Switch>
                <Route exact path='/content'>
                    <Redirect to='/content/matches' />
                </Route>
                <Route path='/content/matches' children={<Matches />} />
                <Route path='/content/news' children={<News newsItems={newsItems} />} />
                <Route path='/content/standings' children={<Standings standingItems={standingItems} />} />
                <Route path='/content/stats' children={<Stats statsItems={statsItems} />} />
                <Route path='/content/players' children={<Players />} />
            </Switch>
        )).to.equal(true)
    })
})