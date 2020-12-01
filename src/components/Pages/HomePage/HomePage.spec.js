import PageHeader from './PageHeader'
import PageBody from './PageBody'
import PageFooter from './PageFooter'

import HomePage, { matches } from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div className='row container-fluid no-gutters'>
                <div className='col-md-12 col-lg-7 mx-md-auto'>
                    <div className='mt-4'>
                        <PageHeader />
                        <PageBody content={matches} />
                        <PageFooter />
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})