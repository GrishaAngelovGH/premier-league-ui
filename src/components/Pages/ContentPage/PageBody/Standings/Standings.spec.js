import Standings from './Standings'

describe('(Component) Standings', () => {
    it('should render component', () => {
        const wrapper = shallow(<Standings />)

        expect(wrapper.equals(
            <div>STANDINGS</div>
        )).to.equal(true)
    })
})