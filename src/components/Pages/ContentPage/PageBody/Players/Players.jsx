const players = [
	{ name: "Erling Haaland", team: "Manchester City", position: "Forward", goals: 27 },
	{ name: "Mohamed Salah", team: "Liverpool", position: "Forward", goals: 18 },
	{ name: "Son Heung-Min", team: "Tottenham Hotspur", position: "Forward", goals: 17 },
	{ name: "Jarrod Bowen", team: "West Ham United", position: "Forward", goals: 16 },
	{ name: "Jean-Philippe Mateta", team: "Crystal Palace", position: "Forward", goals: 16 },
	{ name: "Alexander Isak", team: "Newcastle United", position: "Forward", goals: 21 },
	{ name: "Phil Foden", team: "Manchester City", position: "Midfielder", goals: 19 },
	{ name: "Dominic Solanke", team: "Bournemouth", position: "Forward", goals: 19 },
	{ name: "Ollie Watkins", team: "Aston Villa", position: "Forward", goals: 19 },
	{ name: "Bryan Mbuemo", team: "Brentford", position: "Forward", goals: 16 },
	{ name: "Matheus Cunha", team: "Wolverhampton Wanderers", position: "Forward", goals: 14 },
	{ name: "Ryan Gravenberch", team: "Liverpool", position: "Midfielder", goals: 8 },
	{ name: "Bruno Fernandes", team: "Manchester United", position: "Midfielder", goals: 12 },
	{ name: "Kevin De Bruyne", team: "Manchester City", position: "Midfielder", goals: 10 },
	{ name: "Morgan Gibbs-White", team: "Nottingham Forest", position: "Midfielder", goals: 10 },
	{ name: "Anthony Gordon", team: "Newcastle United", position: "Midfielder", goals: 10 },
	{ name: "Pascal Groß", team: "Brighton & Hove Albion", position: "Midfielder", goals: 8 },
	{ name: "Brennan Johnson", team: "Tottenham Hotspur", position: "Forward", goals: 9 },
]

const Players = () => (
	<div>
		<div className="container mx-auto p-4">
			<div className="grid grid-col-1 md:grid-cols-3 gap-4">
				{
					players.map((v, i) => (
						<div key={i} className="text-xl border-2 border-gray-400 rounded-md p-2 flex flex-col justify-center items-center cursor-default hover:text-white hover:bg-purple-500 hover:border-purple-500">
							<div>Name: {v.name}</div>
							<div>Team: {v.team}</div>
							<div>Position: {v.position}</div>
							<div>Goals: {v.goals}</div>
						</div>
					))
				}
			</div>
		</div>
	</div>
)

export default Players