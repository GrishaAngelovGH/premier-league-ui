import News from './News'

describe('(Component) News', () => {
    it('should render component', () => {
        const wrapper = shallow(<News />)

        expect(wrapper.equals(
            <div>NEWS</div>
        )).to.equal(true)
    })
})