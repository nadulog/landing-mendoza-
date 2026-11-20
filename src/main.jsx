import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Paused from './components/Paused.jsx'
import './index.css'

// Para reactivar la landing, cambiar a false y volver a publicar.
const SITE_PAUSED = false

if (SITE_PAUSED) {
  const robots = document.createElement('meta')
  robots.name = 'robots'
  robots.content = 'noindex'
  document.head.appendChild(robots)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {SITE_PAUSED ? <Paused /> : <App />}
  </React.StrictMode>,
)
