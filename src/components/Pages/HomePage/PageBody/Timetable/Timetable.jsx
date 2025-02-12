import PropTypes from 'prop-types'
import images from 'images'

import './Timetable.scss'

const Timetable = ({ content }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            {
                content.map((v, i) => (
                    <div key={i} className='row no-gutters'>
                        {
                            v.map((item => (
                                <div key={item.id} className='col-md-6 border'>
                                    <div className='row no-gutters row-item'>
                                        <div className='col-8 col-md-8 p-2'>
                                            {
                                                ['firstTeam', 'secondTeam'].map(v => (
                                                    <div key={v} className='row justify-content-center m-1'>
                                                        <div className='col-2 col-md-2'>
                                                            <img src={images[item[v].image]} width={25} />
                                                        </div>
                                                        <div className='col-8 col-md-8'>
                                                            {item[v].name}
                                                        </div>
                                                        <div className='col-1 col-md-1'>
                                                            {item[v].score >= 0 ? item[v].score : ''}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className='col-4 col-md-4 d-flex flex-column justify-content-center text-center'>
                                            <div>{item.day}</div>
                                            <div>{item.time}</div>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                ))
            }
        </div>
    </div>
)

Timetable.propTypes = {
    content: PropTypes.array.isRequired
}

export default Timetable
