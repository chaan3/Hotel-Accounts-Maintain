import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminFoodManagement from './adminaddfood';
import Home from './Home';
import Order from './Order';
import Dashboard from './admin/dashboard';
const Routingpage = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
      <Routes>
          <Route path='/add' element={<AdminFoodManagement/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='order' element={<Order/>}></Route>
          <Route path='/admin-dashboard' element={<Dashboard/>}></Route>
          {/* <Route path='/Register' element={<Register/>}></Route> */}
          {/* <Route path='/Login' element={<Login/>}></Route> */}
          {/* <Route path='/addmenu' element={<AdminFoodManagement/>}/> */}
          {/* <Route path='/login' element={<NavBar/>}></Route> */}
          </Routes>
          {/* </BrowserRouter> */}
    </div>
  )
}

export default Routingpage
