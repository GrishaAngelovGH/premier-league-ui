import PropTypes from 'prop-types'

import Table from './Table'

const Standings = ({ standingItems }) => (
    <div className='row no-gutters justify-content-center mt-3'>
        <div className='col-md-9 col-lg-6'>
            <div className='bg-light p-2 text-center'>
                Current Season
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