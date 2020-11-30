import ContentPage from './ContentPage'

describe('(Component) ContentPage', () => {
    it('should render component', () => {
        const wrapper = shallow(<ContentPage />)

        expect(wrapper.equals(
            <div>Content Page</div>
        )).to.equal(true)
    })
})