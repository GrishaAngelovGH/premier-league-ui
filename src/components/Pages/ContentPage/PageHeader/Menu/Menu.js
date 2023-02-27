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
                                const linkClass = i === tabIndex ? 'border-bottom border-white item mx-2' : 'item mx-2'

                                return (
                                    <Link
                                        key={i}
                                        id={i}
                                        to={`/content/${v}`}
                                        className={linkClass}
                                        onClick={this.handleTabClick}
                                    >
                                        {v}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default Menu