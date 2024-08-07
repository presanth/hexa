import { useState } from 'react'
import './App.css'
import Home from './Pages/home'
import Nav from './Components/Navbar/Nav'
import ServiceCad from './Components/ServiceCard/ServiceCad'
import IconBox from './Components/IconBox/IconBox'
import VerticalBox from './Components/VerticalBox/VerticalBox'
import EnquiryCard from './Components/EnquiryCard/EnquiryCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    {/* <EnquiryCard/> */}
      {/* <VerticalBox Head='Wedding' imageNames={['saloon']}/> */}
    </>
  )
}

export default App
