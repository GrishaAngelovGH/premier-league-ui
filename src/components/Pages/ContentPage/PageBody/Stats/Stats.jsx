const Stats = ({ statsItems }) => (
	<div className='flex justify-center mt-3'>
		<div className='w-1/2'>
			<div className='flex text-gray-500 border-b'>
				<div className='w-5/6'>Players</div>
				<div className='w-1/6 text-end'>Goals</div>
			</div>

			{
				statsItems.map((v, i) => (
					<div key={i} className="flex items-center border-b border-gray-400 p-2">
						<div className="w-5/6">
							<div className="flex gap-2 items-center">
								<div>{v.position}</div>
								<div className="flex items-center gap-2">
									<img src={v.teamImage} className="w-[30px] h-[30px]" />
									<div>
										<div>{v.playerName}</div>
										<div className="text-gray-500">{v.team}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-1/6 text-end">{v.goals}</div>
					</div>
				))
			}
		</div>
	</div>
)

export default Stats