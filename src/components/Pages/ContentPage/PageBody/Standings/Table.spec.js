import Table from './Table'
import { statuses } from 'images'

describe('(Component) Table', () => {
    it('should render component', () => {
        const standingItems = [
            {
                position: 1,
                image: 'img1',
                title: 'Tottenham',
                mp: 10,
                w: 6,
                d: 3,
                l: 1,
                gf: 21,
                ga: 9,
                gd: 12,
                pts: 21,
                lastFive: ['d', 'w', 'l', 'w', 'w']
            }
        ]

        const columns = ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5']

        const wrapper = shallow(<Table rows={standingItems} columns={columns} />)

        expect(wrapper.equals(
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
                    <tr>
                        <th>
                            <span className='pr-2'>{1}</span>
                            <img src={'img1'} width={25} />
                            <span className='pl-2'>Tottenham</span>
                        </th>
                        <td>{10}</td>
                        <td>{6}</td>
                        <td>{3}</td>
                        <td>{1}</td>
                        <td>{21}</td>
                        <td>{9}</td>
                        <td>{12}</td>
                        <td>{21}</td>
                        <td>
                            <img src={statuses['draw']} />
                            <img src={statuses['win']} />
                            <img src={statuses['loss']} />
                            <img src={statuses['win']} />
                            <img src={statuses['win']} />
                        </td>
                    </tr>
                </tbody>
            </table>
        )).to.equal(true)
    })
})