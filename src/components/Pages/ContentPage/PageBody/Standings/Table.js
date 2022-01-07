import PropTypes from 'prop-types'
import { statuses } from 'images'

const Table = ({ rows, columns }) => (
    <table className='table table-hover table-sm table-responsive-sm'>
        <thead className='text-secondary'>
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
)

Table.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
}

export default Table