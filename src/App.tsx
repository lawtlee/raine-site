import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Subscribe from './pages/Subscribe'
import UpcomingShows from './pages/UpcomingShows'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/upcoming-shows" element={<UpcomingShows/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
