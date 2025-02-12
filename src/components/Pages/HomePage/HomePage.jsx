import PageHeader from './PageHeader'
import PageBody from './PageBody'
import PageFooter from './PageFooter'

const HomePage = () => (
	<div className="flex justify-center">
		<div className='w-[95%] lg:w-1/2 p-4'>
			<PageHeader />
			<PageBody />
			<PageFooter />
		</div>
	</div>
)

export default HomePage