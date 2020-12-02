import Stats from './Stats'

describe('(Component) Stats', () => {
    it('should render component', () => {
        const statsItems = [
            { position: 1, playerName: 'Dominic Calvert-Lewin', teamImage: 'img1', team: 'Eveton', goals: 10 },
        ]

        const wrapper = shallow(<Stats statsItems={statsItems} />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center mt-3'>
                <div className='col-9 col-lg-6'>
                    <div className='row text-secondary border-bottom'>
                        <div className='col-9 col-md-10'>Players</div>
                        <div className='col-2 col-md-2'>Goals</div>
                    </div>

                    <div className='row no-gutters border-bottom'>
                        <div className='col-1 col-md-1 m-1'>
                            {statsItems[0].position}
                        </div>
                        <div className='col-9 col-md-9'>
                            <div className='row m-1'>
                                {statsItems[0].playerName}
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1 col-md-1'>
                                    <img src={statsItems[0].teamImage} width={25} />
                                </div>
                                <div className='col-7 col-md-5 text-secondary'>
                                    {statsItems[0].team}
                                </div>
                            </div>
                        </div>

                        <div className='col-1 col-md-1 d-flex justify-content-end mt-1'>
                            {statsItems[0].goals}
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})