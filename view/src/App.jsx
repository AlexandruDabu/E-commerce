import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/user/Login.jsx'
import MainLayout from './pages/layouts/MainLayout.jsx'
import Register from './pages/user/Register.jsx'
import Contact from './components/features/Contact/Contact.jsx'
import Content from './components/common/main/Content.jsx'
import ProductLayout from './pages/layouts/ProductLayout.jsx'
import Product from './components/common/main/Product/Product.jsx'
import ContentBySearchTerm from './components/common/main/ProductsByRegex/ContentBySearchTerm.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/category/:categoryName?' element={<Content/>}/>
        <Route path='/products/results' element={<ContentBySearchTerm/>}/>
        {/* <Route path='/category/:id' element={<ContentByCategory/>}/> */}
      </Route>
      <Route path='/product' element={<ProductLayout/>}>
        <Route path='/product/:id?' element={<Product/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
