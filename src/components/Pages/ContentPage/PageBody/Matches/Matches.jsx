import { useContext } from 'react'
import AppContext from "context"

import PageBody from 'components/Pages/HomePage/PageBody'

const Matches = () => {
	const { matches } = useContext(AppContext)

	return (
		<PageBody content={matches} />
	)
}

export default Matches