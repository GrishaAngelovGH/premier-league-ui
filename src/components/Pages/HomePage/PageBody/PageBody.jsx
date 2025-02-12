import PropTypes from 'prop-types'
import Timetable from './Timetable'

const PageBody = ({ content }) => (
    <Timetable content={content} />
)

PageBody.propTypes = {
    content: PropTypes.array.isRequired
}

export default PageBody