import { Link } from 'react-router-dom'
import images from 'images'

import PageHeader from './PageHeader'

describe('(Component) PageHeader', () => {
    it('should render component', () => {
        const wrapper = shallow(<PageHeader />)

        expect(wrapper.equals(
            <div className='page-header w-100'>
                <div className='row'>
                    <div className='col-3 col-md-2 col-lg-1'>
                        <img src={images['premierLeagueLogo']} />
                    </div>
                    <div className='col-6 col-md-6'>
                        <div className='row'>
                            Premier League
                        </div>
                        <div className='row matchday-description'>
                            Matchday 10 of 38
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12 justify-content-between mt-4'>
                        <div className='row flex-nowrap overflow-auto ml-1'>
                            <Link to='/content'>
                                <div className={'border-bottom border-white item'}>
                                    matches
                                </div>
                            </Link>
                            <Link to='/content'>
                                <div className={'item'}>
                                    news
                                </div>
                            </Link>
                            <Link to='/content'>
                                <div className={'item'}>
                                    standings
                                </div>
                            </Link>
                            <Link to='/content'>
                                <div className={'item'}>
                                    stats
                                </div>
                            </Link>
                            <Link to='/content'>
                                <div className={'item'}>
                                    players
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})