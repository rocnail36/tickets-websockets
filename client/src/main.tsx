import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import SockectProvider from './providers/SocketProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <SockectProvider>
    <App />
    </SockectProvider>
    </Router>
  </React.StrictMode>,
)
