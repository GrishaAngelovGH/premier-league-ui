import images from 'images'

const Timetable = ({ content }) => (
	<div>
		{
			content.map((v, i) => (
				<div key={i} className='flex flex-col md:flex-row text-sm md:text-base'>
					{
						v.map((item => (
							<div key={item.id} className='md:w-1/2 border'>
								<div className='flex justify-between cursor-pointer hover:bg-gray-200'>
									<div className='p-2 flex flex-col'>
										{
											['firstTeam', 'secondTeam'].map(v => (
												<div key={v} className='flex justify-center items-center gap-2 m-1 w-[200px]'>
													<img src={images[item[v].image]} className="w-[30px] h-[30px]" />
													<div className="w-[120px]">{item[v].name}</div>
													<div>{item[v].score >= 0 ? item[v].score : ''}</div>
												</div>
											))
										}
									</div>

									<div className='flex-1'>
										<div className="h-full flex flex-col justify-center items-center">
											<div>{item.day}</div>
											<div>{item.time}</div>
										</div>
									</div>
								</div>
							</div>
						)))
					}
				</div>
			))
		}
	</div>
)

export default Timetable
