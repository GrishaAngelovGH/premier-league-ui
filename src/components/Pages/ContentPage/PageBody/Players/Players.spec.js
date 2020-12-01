import Players from './Players'

describe('(Component) Players', () => {
    it('should render component', () => {
        const wrapper = shallow(<Players />)

        expect(wrapper.equals(
            <div>PLAYERS</div>
        )).to.equal(true)
    })
})