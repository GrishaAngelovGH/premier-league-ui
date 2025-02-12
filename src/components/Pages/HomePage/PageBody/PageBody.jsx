import { useContext } from 'react'
import AppContext from "context"
import Timetable from './Timetable'

const PageBody = () => {
	const { matches } = useContext(AppContext)

	return <Timetable content={matches} />
}

export default PageBody