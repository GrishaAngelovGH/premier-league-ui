import { statuses } from 'images'

const Table = ({ rows, columns }) => (
	<div className='overflow-auto mb-5'>
		<table className='w-full'>
			<thead className='text-gray-500'>
				<tr>
					{
						columns.map(v => (
							<th key={v} scope='col'>{v}</th>
						))
					}
				</tr>
			</thead>
			<tbody>
				{
					rows.map(v => (
						<tr key={v.position}>
							<td className='flex w-[200px]'>
								<span className='pr-2'>{v.position}</span>
								<img src={v.image} width={25} />
								<span className='pl-2'>{v.title}</span>
							</td>
							<td>{v.mp}</td>
							<td>{v.w}</td>
							<td>{v.d}</td>
							<td>{v.l}</td>
							<td>{v.gf}</td>
							<td>{v.ga}</td>
							<td>{v.gd}</td>
							<td>{v.pts}</td>
							<td className='flex gap-2 w-[100px]'>
								{
									v.lastFive.map((v, i) => {
										if (v === 'w') return <img key={i} src={statuses['win']} />
										if (v === 'd') return <img key={i} src={statuses['draw']} />
										if (v === 'l') return <img key={i} src={statuses['loss']} />
									})
								}
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	</div>
)

export default Table