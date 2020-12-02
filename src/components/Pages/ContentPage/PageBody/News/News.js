import PropTypes from 'prop-types'

import { news } from 'images'

export const newsItems = [
    {
        title: 'Guardiola rules out new Manchester City signings in January',
        source: 'Goal.com',
        time: '4 days ago',
        image: news['news1']
    },
    {
        title: `'Welbeck said it wasn't a penalty!' – Henderson fumes at VAR after 
        Liverpool are held by Brighton`,
        source: 'Goal.com',
        time: '3 days ago',
        image: news['news2']
    },
    {
        title: 'Chelsea 0-0 Tottenham Hotspur: Spurs return to the top of the Premier League',
        source: 'BBC News',
        time: '2 days ago',
        image: news['news3']
    },
    {
        title: 'Return of supporters to Stamford Bridge | Official Site | Chelsea Football Club',
        source: 'Chelsea FC',
        time: '5 days ago',
        image: news['news4']
    }
]

const News = ({ newsItems }) => (
    <div className='row no-gutters justify-content-center mt-3'>
        <div className='col-md-9 col-lg-6'>
            {
                newsItems.map(v => (
                    <div className='row border rounded p-2' key={v.title}>
                        <div className='col-md-9'>
                            <a href='#/content/news'>{v.title}</a>
                            <div className='text-secondary small'>
                                {v.source} {v.time}
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <img src={v.image} className='rounded' />
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
)

News.propTypes = {
    newsItems: PropTypes.array.isRequired
}

export default News