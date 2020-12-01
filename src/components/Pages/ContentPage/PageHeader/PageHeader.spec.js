import { Link } from 'react-router-dom'

import Menu from './Menu'
import PageHeader, { ArrowLeft, CloseBtn } from './PageHeader'

describe('(Component) ContentPage > PageHeader', () => {
    it('should render component', () => {
        const wrapper = shallow(<PageHeader />)

        expect(wrapper.equals(
            <div className='row flex-nowrap overflow-auto no-gutters content-header'>
                <div className='d-flex'>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                    <div className='m-1'>Premier League</div>
                </div>

                <Menu />

                <CloseBtn />
            </div>
        )).to.equal(true)
    })
})