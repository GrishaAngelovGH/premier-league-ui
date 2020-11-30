import PageHeader from './PageHeader'
import PageBody from './PageBody'

export const matches = [
    [
        {
            id: '11',
            firstTeam: { image: 'crystalPalace', name: 'Crystal Palace', score: 0 },
            secondTeam: { image: 'newcastle', name: 'Newcastle', score: 2 },
            day: 'FT',
            time: 'Yesterday'
        },
        {
            id: '22',
            firstTeam: { image: 'brighton', name: 'Brighton', score: 1 },
            secondTeam: { image: 'liverpool', name: 'Liverpool', score: 3 },
            day: 'FT',
            time: 'Yesterday'
        },
    ],
    [
        {
            id: '33',
            firstTeam: { image: 'manCity', name: 'Man. City', score: 2 },
            secondTeam: { image: 'burnley', name: 'Burnley', score: 1 },
            day: 'FT',
            time: 'Yesterday'
        },
        {
            id: '44',
            firstTeam: { image: 'everton', name: 'Everton', score: -1 },
            secondTeam: { image: 'leeds', name: 'Leeds United', score: -1 },
            day: 'Today',
            time: '19:30'
        },
    ],
    [
        {
            id: '55',
            firstTeam: { image: 'westBrom', name: 'West Brom', score: -1 },
            secondTeam: { image: 'sheffield', name: 'Sheffield United', score: -1 },
            day: 'Today',
            time: '22:00'
        },
        {
            id: '66',
            firstTeam: { image: 'southampton', name: 'Southampton', score: -1 },
            secondTeam: { image: 'manUtd', name: 'Man United', score: -1 },
            day: 'Tomorrow',
            time: '16:00'
        }
    ]
]

const HomePage = () => (
    <div className='row container-fluid no-gutters'>
        <div className='col-md-12 col-lg-7 mx-md-auto'>
            <div className='mt-4'>
                <PageHeader />
                <PageBody content={matches} />
            </div>
        </div>
    </div>
)

export default HomePage