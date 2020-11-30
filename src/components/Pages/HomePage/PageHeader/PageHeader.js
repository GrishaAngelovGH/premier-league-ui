import { Link } from 'react-router-dom'
import images from 'images'

import './PageHeader.scss'

const PageHeader = () => {
    const categories = ['matches', 'news', 'standings', 'stats', 'players']

    return (
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
                        {
                            categories.map((v, i) => {
                                const classnames = i === 0 ? 'border-bottom border-white item' : 'item'

                                return (
                                    <Link to='/content' key={i}>
                                        <div className={classnames}>{v}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader