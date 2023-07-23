import React from 'react'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import Body from './Components/Body'

const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/body' element={<Body />} />
    </Routes>
   
    </>
  )
}
export default App