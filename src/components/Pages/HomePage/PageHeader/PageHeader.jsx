import { Link } from 'react-router-dom'
import images from 'images'

import './PageHeader.scss'

const PageHeader = () => {
    const categories = ['matches', 'news', 'standings', 'stats', 'players']

    return (
        <div className='page-header w-100'>
            <div className='row'>
                <div className='col-2 col-md-1'>
                    <img src={images['premierLeagueLogo']} />
                </div>
                <div className='col-10'>
                    <h5 className='m-0'>Premier League</h5>
                    <h5 className='m-0 matchday-description'>
                        Matchday 10 of 38
                    </h5>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12 justify-content-between mt-4'>
                    <div className='row flex-nowrap overflow-auto ml-1'>
                        {
                            categories.map((v, i) => {
                                const linkClass = i === 0 ? 'border-bottom border-white item mx-2' : 'item mx-2'

                                return (
                                    <Link to='/content' key={i} className={linkClass}>
                                        {v}
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