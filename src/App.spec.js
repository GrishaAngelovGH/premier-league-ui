import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'

import App from './App'

describe('(Component) App', () => {
    it('should render component', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.equals(
            <Router>
                <Switch>
                    <Route exact path='/' children={<HomePage />} />
                    <Route path='/content' children={<ContentPage />} />
                </Switch>
            </Router>
        )).to.equal(true)
    })
})