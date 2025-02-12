import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	const [tabIndex, setTabIndex] = useState(0)

	const handleTabClick = ({ target }) => {
		setTabIndex(parseInt(target.id))
	}

	const categories = ['matches', 'news', 'standings', 'stats', 'players']

	return (
		<div className='flex gap-4 overflow-auto justify-evenly'>
			{
				categories.map((v, i) => {
					const linkClass = i === tabIndex ? 'border-b border-white hover:border-b-0' : 'border-b-0'

					return (
						<Link
							key={i}
							id={i}
							to={`/content/${v}`}
							className={`text-decoration-none text-white text-uppercase ${linkClass}`}
							onClick={handleTabClick}
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