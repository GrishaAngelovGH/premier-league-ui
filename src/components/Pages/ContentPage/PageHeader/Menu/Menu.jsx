import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
	const categories = ['matches', 'news', 'standings', 'stats', 'players']
	const currentPath = useLocation().pathname
	const currentLocation = currentPath.substring(currentPath.lastIndexOf('/') + 1)

	return (
		<div className='flex gap-4 overflow-auto justify-evenly'>
			{
				categories.map((v, i) => {
					const linkClass = v === currentLocation ? 'border-b border-white hover:border-b-0' : 'border-b-0'

					return (
						<Link
							key={i}
							to={`/content/${v}`}
							className={`text-decoration-none text-white uppercase ${linkClass}`}
						>
							{v}
						</Link>
					)
				})
			}
		</div>
	)
}

export default Menu