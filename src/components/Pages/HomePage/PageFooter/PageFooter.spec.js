import { Link } from 'react-router-dom'
import PageFooter, { ChevronDown } from './PageFooter'

describe('(Component) PageFooter', () => {
    it('should render component', () => {
        const wrapper = shallow(<PageFooter />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row no-gutters justify-content-between border p-5 text-secondary'>
                        <div>All times are in Eastern European Time</div>
                        <div>Feedback</div>
                    </div>

                    <Link to='/content' className='footer-btn'>
                        <div className='row no-gutters justify-content-center border p-3'>
                            <div className='expand-btn mt-n4'>
                                <ChevronDown />
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mt-n3'>
                            <span className='mt-n1'>See more</span>
                        </div>
                    </Link>
                </div>
            </div>
        )).to.equal(true)
    })
})