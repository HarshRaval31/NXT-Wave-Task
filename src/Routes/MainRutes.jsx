import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import User from '../Pages/User'
import Cars from '../Pages/Cars'

function MainRutes() {
  return (

    <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/User' element={<User/>}></Route>
          <Route path='/Cars' element={<Cars/>}></Route>
          <Route path='/*' element={"Upcoming Page....."}></Route>
    </Routes>

  )
}

export default MainRutes