import Standings from './Standings'
import Table from './Table'

describe('(Component) Standings', () => {
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

        const wrapper = shallow(<Standings standingItems={standingItems} />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center mt-3'>
                <div className='col-md-9 col-lg-6'>
                    <div className='bg-secondary p-2 text-white'>
                        Season
                        <div className='dropdown'>
                            <button className='btn btn-primary btn-sm dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                2021-22
                            </button>
                        </div>
                    </div>

                    <Table
                        rows={standingItems}
                        columns={['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5']}
                    />
                </div>
            </div >
        )).to.equal(true)
    })
})