import PropTypes from 'prop-types'

import Table from './Table'

const Standings = ({ standingItems }) => (
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
)

Standings.propTypes = {
    standingItems: PropTypes.array.isRequired
}

export default Standings