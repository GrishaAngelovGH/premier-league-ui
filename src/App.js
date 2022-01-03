import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/content/*' element={<ContentPage />} />
      </Routes>
    </Router>
  )
}

export default App
