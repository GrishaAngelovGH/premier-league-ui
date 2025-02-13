import Table from './Table'

const Standings = ({ standingItems }) => (
	<div className='flex justify-center mt-3'>
		<div className='w-1/2'>
			<div className='bg-gray-200 text-xl p-2 text-center rounded-md'>
				Current Season
			</div>

			<Table
				rows={standingItems}
				columns={['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5']}
			/>
		</div>
	</div >
)

export default Standings