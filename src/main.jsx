import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CryptoContext from './contexts/CryptoContext.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';
import ThemeContext from './contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContext>
      <CryptoContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CryptoContext>
    </ThemeContext>
  </BrowserRouter>
  
)
