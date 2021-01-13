import Timetable from './Timetable'
import images from 'images'

describe('(Component) Timetable', () => {
    it('should render component', () => {
        const matches = [
            [
                {
                    id: '11',
                    firstTeam: { image: 'crystalPalace', name: 'Crystal Palace', score: 0 },
                    secondTeam: { image: 'newcastle', name: 'Newcastle', score: 2 },
                    day: 'FT',
                    time: 'Yesterday'
                },
                {
                    id: '22',
                    firstTeam: { image: 'everton', name: 'Everton', score: -1 },
                    secondTeam: { image: 'leeds', name: 'Leeds United', score: -1 },
                    day: 'Today',
                    time: '19:30'
                }
            ]
        ]

        const wrapper = shallow(<Timetable content={matches} />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-6 border'>
                            <div className='row no-gutters row-item'>
                                <div className='col-8 col-md-8 p-2'>
                                    <div className='row justify-content-center m-1'>
                                        <div className='col-2 col-md-2'>
                                            <img src={images[matches[0][0].firstTeam.image]} width={25} />
                                        </div>
                                        <div className='col-8 col-md-8'>
                                            {matches[0][0].firstTeam.name}
                                        </div>
                                        <div className='col-1 col-md-1'>
                                            {0}
                                        </div>
                                    </div>

                                    <div className='row justify-content-center m-1'>
                                        <div className='col-2 col-md-2'>
                                            <img src={images[matches[0][0].secondTeam.image]} width={25} />
                                        </div>
                                        <div className='col-8 col-md-8'>
                                            {matches[0][0].secondTeam.name}
                                        </div>
                                        <div className='col-1 col-md-1'>
                                            {2}
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4 col-md-4 d-flex flex-column justify-content-center text-center'>
                                    <div>{matches[0][0].day}</div>
                                    <div>{matches[0][0].time}</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 border'>
                            <div className='row no-gutters row-item'>
                                <div className='col-8 col-md-8 p-2'>
                                    <div className='row justify-content-center m-1'>
                                        <div className='col-2 col-md-2'>
                                            <img src={images[matches[0][1].firstTeam.image]} width={25} />
                                        </div>
                                        <div className='col-8 col-md-8'>
                                            {matches[0][1].firstTeam.name}
                                        </div>
                                        <div className='col-1 col-md-1'>
                                            {''}
                                        </div>
                                    </div>

                                    <div className='row justify-content-center m-1'>
                                        <div className='col-2 col-md-2'>
                                            <img src={images[matches[0][1].secondTeam.image]} width={25} />
                                        </div>
                                        <div className='col-8 col-md-8'>
                                            {matches[0][1].secondTeam.name}
                                        </div>
                                        <div className='col-1 col-md-1'>
                                            {''}
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4 col-md-4 d-flex flex-column justify-content-center text-center'>
                                    <div>{matches[0][1].day}</div>
                                    <div>{matches[0][1].time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})
