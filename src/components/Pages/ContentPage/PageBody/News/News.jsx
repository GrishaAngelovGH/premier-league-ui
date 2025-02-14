import { useContext } from 'react'
import AppContext from 'context'

const News = () => {
	const { newsItems } = useContext(AppContext)

	return (
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
}

export default News