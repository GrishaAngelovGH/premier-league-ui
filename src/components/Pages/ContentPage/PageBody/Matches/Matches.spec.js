import { PageBody, matches } from 'components/Pages/HomePage'

import Matches from './Matches'

describe('(Component) Matches', () => {
    it('should render component', () => {
        const wrapper = shallow(<Matches />)

        expect(wrapper.equals(
            <PageBody content={matches} />
        )).to.equal(true)
    })
})