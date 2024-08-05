import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/user/Login.jsx'
import MainLayout from './MainLayout.jsx'
import Register from './pages/user/Register.jsx'
import Contact from './components/features/Contact/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      {/* Content for Main */}
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
