import PropTypes from 'prop-types'
import { statuses } from 'images'

const Standings = ({ standingItems }) => (
    <div className='row no-gutters justify-content-center mt-3'>
        <div className='col-md-9 col-lg-6'>
            <div className='bg-secondary p-2 text-white'>
                Season
                <div className='dropdown'>
                    <button className='btn btn-primary btn-sm dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        2020-21
                    </button>
                </div>
            </div>

            <table className='table table-hover table-sm table-responsive-sm'>
                <thead className='text-secondary'>
                    <tr>
                        <th scope='col'>Club</th>
                        <th scope='col'>MP</th>
                        <th scope='col'>W</th>
                        <th scope='col'>D</th>
                        <th scope='col'>L</th>
                        <th scope='col'>GF</th>
                        <th scope='col'>GA</th>
                        <th scope='col'>GD</th>
                        <th scope='col'>Pts</th>
                        <th scope='col'>Last 5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        standingItems.map(v => (
                            <tr key={v.position}>
                                <th>
                                    <span className='pr-2'>{v.position}</span>
                                    <img src={v.image} width={25} />
                                    <span className='pl-2'>{v.title}</span>
                                </th>
                                <td>{v.mp}</td>
                                <td>{v.w}</td>
                                <td>{v.d}</td>
                                <td>{v.l}</td>
                                <td>{v.gf}</td>
                                <td>{v.ga}</td>
                                <td>{v.gd}</td>
                                <td>{v.pts}</td>
                                <td>
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
    </div >
)

Standings.propTypes = {
    standingItems: PropTypes.array.isRequired
}

export default Standings