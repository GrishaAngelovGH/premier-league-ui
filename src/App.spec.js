import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'

import App from './App'

describe('(Component) App', () => {
    it('should render component', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.equals(
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/content/*' element={<ContentPage />} />
                </Routes>
            </Router>
        )).to.equal(true)
    })
})