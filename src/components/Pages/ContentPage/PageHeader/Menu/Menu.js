import { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    state = {
        tabIndex: 0
    }

    handleTabClick = ({ target }) => {
        this.setState({ tabIndex: parseInt(target.id) })
    }

    render() {
        const { tabIndex } = this.state
        const categories = ['matches', 'news', 'standings', 'stats', 'players']

        return (
            <div className='row flex-nowrap overflow-auto'>
                <div className='col-md-12 mt-2'>
                    <div className='row flex-nowrap overflow-auto ml-1'>
                        {
                            categories.map((v, i) => {
                                const classnames = i === tabIndex ? 'border-bottom border-white item' : 'item'

                                return (
                                    <Link to={`/content/${v}`} key={i} onClick={this.handleTabClick}>
                                        <div id={i} className={classnames}>{v}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu