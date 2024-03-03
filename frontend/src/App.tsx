import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RoomPage from './pages/RoomPage'
import SuggestPage from './pages/SuggestPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/room' element={<RoomPage />}></Route>
          <Route path='/suggest' element={<SuggestPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
