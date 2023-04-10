import { players } from 'images'
import './Players.scss'

const Players = () => (
    <div className='row no-gutters vh-100 players-bg'>
        <div className='col-md-12'>
            <img src={players} className='w-100' />
        </div>
    </div>
)

export default Players