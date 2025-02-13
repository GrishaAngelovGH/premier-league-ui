import { Link } from 'react-router-dom'
import images from 'images'

const PageHeader = () => {
	const categories = ['matches', 'news', 'standings', 'stats', 'players']

	return (
		<div className='bg-purple-900 text-white h-[130px] rounded-t-md p-2'>
			<div className='flex items-center gap-2'>
				<img src={images['premierLeagueLogo']} className="w-[50px] h-[50px]" />
				<div className="text-xl">
					<div>Premier League</div>
					<div className='opacity-[0.5]'>Matchday 10 of 38</div>
				</div>
			</div>

			<div className='flex justify-evenly p-4 overflow-auto'>
				{
					categories.map((v, i) => {
						const linkClass = i === 0 ? 'border-b border-white hover:border-b-0' : 'border-b-0'

						return (
							<Link to={`/content/${v}`} key={i} className={`text-white text-decoration-none uppercase p-1 hover:bg-purple-800 hover:rounded-md ${linkClass}`}>
								{v}
							</Link>
						)
					})
				}
			</div>
		</div>
	)
}

export default PageHeader