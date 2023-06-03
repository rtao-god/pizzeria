import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { AuthContext } from "@context/index.js"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthContext.Provider value="dark">
      <App />
    </AuthContext.Provider>
  </BrowserRouter>
=======

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
)
