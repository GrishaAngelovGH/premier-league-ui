import PropTypes from 'prop-types'

import images from 'images'
import './PageBody.scss'

const PageBody = ({ content }) => (
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
                                            <div className='row justify-content-center m-1'>
                                                <div className='col-2 col-md-2'>
                                                    <img src={images[item.firstTeam.image]} width={25} />
                                                </div>
                                                <div className='col-8 col-md-8'>
                                                    {item.firstTeam.name}
                                                </div>
                                                <div className='col-1 col-md-1'>
                                                    {item.firstTeam.score >= 0 ? item.firstTeam.score : ''}
                                                </div>
                                            </div>

                                            <div className='row justify-content-center m-1'>
                                                <div className='col-2 col-md-2'>
                                                    <img src={images[item.secondTeam.image]} width={25} />
                                                </div>
                                                <div className='col-8 col-md-8'>
                                                    {item.secondTeam.name}
                                                </div>
                                                <div className='col-1 col-md-1'>
                                                    {item.secondTeam.score >= 0 ? item.secondTeam.score : ''}
                                                </div>
                                            </div>
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

PageBody.propTypes = {
    content: PropTypes.array.isRequired
}

export default PageBody