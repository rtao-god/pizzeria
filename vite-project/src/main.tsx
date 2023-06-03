import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from "@context/index.js"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthContext.Provider value="dark">
      <App />
    </AuthContext.Provider>
  </BrowserRouter>
)
