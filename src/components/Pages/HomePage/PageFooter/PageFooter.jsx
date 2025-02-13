import { Link } from 'react-router-dom'

export const ChevronDown = () => (
	<svg width='1em' height='1em' viewBox='0 0 16 16' className='bg-purple-900 text-white w-[30px] h-[30px] rounded-full p-2' fill=' white' xmlns='http://www.w3.org/2000/svg'>
		<path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
	</svg >
)

const PageFooter = () => (
	<div className="flex flex-col justify-center items-center">
		<div className='w-full text-center border border-t-0 border-gray-400 p-2 text-gray-500'>
			<div>All times are in Eastern European Time</div>
		</div>

		<Link to='/content' className="mt-2 flex flex-col items-center text-center text-decoration-none">
			<ChevronDown />
			<div>See more</div>
		</Link>
	</div>
)

export default PageFooter