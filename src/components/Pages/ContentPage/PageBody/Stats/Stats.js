import PropTypes from 'prop-types'

const Stats = ({ statsItems }) => (
    <div className='row no-gutters justify-content-center mt-3'>
        <div className='col-9 col-lg-6'>
            <div className='row text-secondary border-bottom'>
                <div className='col-9 col-md-10'>Players</div>
                <div className='col-2 col-md-2'>Goals</div>
            </div>

            {
                statsItems.map((v, i) => (
                    <div key={i} className='row no-gutters border-bottom'>
                        <div className='col-1 col-md-1 m-1'>
                            {v.position}
                        </div>
                        <div className='col-9 col-md-9'>
                            <div className='row m-1'>
                                {v.playerName}
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1 col-md-1'>
                                    <img src={v.teamImage} width={25} />
                                </div>
                                <div className='col-7 col-md-5 text-secondary'>
                                    {v.team}
                                </div>
                            </div>
                        </div>

                        <div className='col-1 col-md-1 d-flex justify-content-end mt-1'>
                            {v.goals}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

Stats.propTypes = {
    statsItems: PropTypes.array.isRequired
}

export default Stats