import { Link } from 'react-router-dom'
import './PageFooter.scss'

export const ChevronDown = () => (
    <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='white' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
    </svg>
)

const PageFooter = () => (
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
)

export default PageFooter