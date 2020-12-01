import { Link } from 'react-router-dom'

import Menu from './Menu'

describe('(Component) Menu', () => {
    it('should render component', () => {
        const wrapper = shallow(<Menu />)

        expect(wrapper.equals(
            <div className='row flex-nowrap overflow-auto'>
                <div className='col-md-12 mt-2'>
                    <div className='row flex-nowrap overflow-auto ml-1'>
                        <Link to='/content/matches' onClick={wrapper.instance().handleTabClick}>
                            <div id={0} className={'border-bottom border-white item'}>matches</div>
                        </Link>
                        <Link to='/content/news' onClick={wrapper.instance().handleTabClick}>
                            <div id={1} className={'item'}>news</div>
                        </Link>
                        <Link to='/content/standings' onClick={wrapper.instance().handleTabClick}>
                            <div id={2} className={'item'}>standings</div>
                        </Link>
                        <Link to='/content/stats' onClick={wrapper.instance().handleTabClick}>
                            <div id={3} className={'item'}>stats</div>
                        </Link>
                        <Link to='/content/players' onClick={wrapper.instance().handleTabClick}>
                            <div id={4} className={'item'}>players</div>
                        </Link>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should change active tab on click', () => {
        const wrapper = shallow(<Menu />)

        const { onClick, children } = wrapper.find(Link).at(3).props()

        onClick({ target: { id: children.props.id } })

        expect(wrapper.equals(
            <div className='row flex-nowrap overflow-auto'>
                <div className='col-md-12 mt-2'>
                    <div className='row flex-nowrap overflow-auto ml-1'>
                        <Link to='/content/matches' onClick={wrapper.instance().handleTabClick}>
                            <div id={0} className={'item'}>matches</div>
                        </Link>
                        <Link to='/content/news' onClick={wrapper.instance().handleTabClick}>
                            <div id={1} className={'item'}>news</div>
                        </Link>
                        <Link to='/content/standings' onClick={wrapper.instance().handleTabClick}>
                            <div id={2} className={'item'}>standings</div>
                        </Link>
                        <Link to='/content/stats' onClick={wrapper.instance().handleTabClick}>
                            <div id={3} className={'border-bottom border-white item'}>stats</div>
                        </Link>
                        <Link to='/content/players' onClick={wrapper.instance().handleTabClick}>
                            <div id={4} className={'item'}>players</div>
                        </Link>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})