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
	<div className='flex flex-col gap-5 items-center mt-3'>
		{
			newsItems.map(v => (
				<div className='flex items-center border-2 border-gray-400 rounded-md text-center p-1 w-1/2' key={v.title}>
					<div className='w-4/6 md:w-5/6'>
						<a href='#/content/news'>{v.title}</a>
						<div className='text-gray-500 text-sm'>
							{v.source} {v.time}
						</div>
					</div>
					<div className='w-2/6 md:w-1/6'>
						<img src={v.image} className='rounded-md' />
					</div>
				</div>
			))
		}
	</div>
)

export default News