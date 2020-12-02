import { players } from 'images'

import Players from './Players'

describe('(Component) Players', () => {
    it('should render component', () => {
        const wrapper = shallow(<Players />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <img src={players} className='img-fluid' />
                </div>
            </div>
        )).to.equal(true)
    })
})