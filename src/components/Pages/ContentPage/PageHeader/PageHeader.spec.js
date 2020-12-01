import { Link } from 'react-router-dom'
import PageHeader, { ArrowLeft, CloseBtn } from './PageHeader'

describe('(Component) ContentPage > PageHeader', () => {
    it('should render component', () => {
        const wrapper = shallow(<PageHeader />)

        expect(wrapper.equals(
            <div className='row no-gutters content-header text-white justify-content-between p-3'>
                <div className='d-flex'>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                    <div className='m-1'>Premier League</div>
                </div>

                <CloseBtn />
            </div>
        )).to.equal(true)
    })
})