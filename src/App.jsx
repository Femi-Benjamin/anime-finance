import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Register from './pages/userdomain/Register'
import Login from './pages/userdomain/Login'
import Wallet from './pages/userdomain/Wallet'
import Home from './pages/Home'
import Dashboard from './pages/app/Dashboard'
import Announcement from './pages/app/Announcement'
import Teams from './pages/app/Teams'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
