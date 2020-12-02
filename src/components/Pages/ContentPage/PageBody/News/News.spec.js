import News from './News'

describe('(Component) News', () => {
    it('should render component', () => {
        const newsItems = [
            {
                title: 'title1',
                source: 'source1',
                time: '4 days ago',
                image: 'img1'
            },
            {
                title: 'title2',
                source: 'source2',
                time: '3 days ago',
                image: 'img2'
            }
        ]

        const wrapper = shallow(<News newsItems={newsItems} />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center mt-3'>
                <div className='col-md-9 col-lg-6'>

                    <div className='row border rounded p-2'>
                        <div className='col-md-9'>
                            <a href='#/content/news'>
                                title1
                            </a>
                            <div className='text-secondary small'>
                                source1 4 days ago
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <img src={'img1'} className='rounded' />
                        </div>
                    </div>

                    <div className='row border rounded p-2'>
                        <div className='col-md-9'>
                            <a href='#/content/news'>
                                title2
                            </a>
                            <div className='text-secondary small'>
                                source2 3 days ago
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <img src={'img2'} className='rounded' />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})