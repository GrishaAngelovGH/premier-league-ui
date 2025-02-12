import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/content/*' element={<ContentPage />} />
      </Routes>
    </Router>
  )
}

export default App
