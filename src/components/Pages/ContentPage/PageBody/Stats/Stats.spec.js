import Stats from './Stats'

describe('(Component) Stats', () => {
    it('should render component', () => {
        const wrapper = shallow(<Stats />)

        expect(wrapper.equals(
            <div>STATS</div>
        )).to.equal(true)
    })
})