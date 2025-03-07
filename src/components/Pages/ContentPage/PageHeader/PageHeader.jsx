import { Link } from 'react-router-dom'

import Menu from './Menu'

export const ArrowLeft = () => (
	<Link to='/'>
		<svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-arrow-left-short' fill='white' xmlns='http://www.w3.org/2000/svg'>
			<path fillRule='evenodd' d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z' />
		</svg>
	</Link>
)

export const CloseBtn = () => (
	<Link to='/'>
		<span role='button'>
			<svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-x' fill='white' xmlns='http://www.w3.org/2000/svg'>
				<path fillRule='evenodd' d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
			</svg>
		</span>
	</Link>
)

const PageHeader = () => (
	<div className='flex justify-between items-center bg-purple-900 text-white'>
		<div className='flex items-center'>
			<ArrowLeft />
			<div className='hidden md:block'>Premier League</div>
		</div>

		<Menu />

		<CloseBtn />
	</div>
)

export default PageHeader