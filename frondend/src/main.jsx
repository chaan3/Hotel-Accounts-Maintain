import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routingpage from './components/Routingpage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    <Routingpage/>
  </React.StrictMode>
  </BrowserRouter>
)
