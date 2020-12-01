import PageHeader from './PageHeader'
import PageBody from './PageBody'

import ContentPage from './ContentPage'

describe('(Component) ContentPage', () => {
    it('should render component', () => {
        const wrapper = shallow(<ContentPage />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <PageHeader />
                    <PageBody />
                </div>
            </div>
        )).to.equal(true)
    })
})