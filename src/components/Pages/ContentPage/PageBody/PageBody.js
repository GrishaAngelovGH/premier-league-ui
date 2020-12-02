
import { Switch, Route, Redirect } from 'react-router-dom'

import Matches from './Matches'
import News, { newsItems } from './News'
import Standings, { standingItems } from './Standings'
import Stats from './Stats'
import Players from './Players'

const PageBody = () => (
    <Switch>
        <Route exact path='/content'>
            <Redirect to='/content/matches' />
        </Route>
        <Route path='/content/matches' children={<Matches />} />
        <Route path='/content/news' children={<News newsItems={newsItems} />} />
        <Route path='/content/standings' children={<Standings standingItems={standingItems} />} />
        <Route path='/content/stats' children={<Stats />} />
        <Route path='/content/players' children={<Players />} />
    </Switch>
)

export default PageBody