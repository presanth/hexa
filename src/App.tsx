import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import ProductDisplay from './Pages/ProductDisplay'
import PrivateProduct from './Pages/PrivateProduct'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:cid' element={<ProductDisplay/>}/>
      <Route path='/private' element={<PrivateProduct/>}/>
    </Routes>
    </>
  )
}

export default App
