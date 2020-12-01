import Matches from './Matches'

describe('(Component) Matches', () => {
    it('should render component', () => {
        const wrapper = shallow(<Matches />)

        expect(wrapper.equals(
            <div>MATCHES</div>
        )).to.equal(true)
    })
})