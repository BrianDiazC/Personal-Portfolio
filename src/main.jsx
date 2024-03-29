import React from 'react'
import { router } from './router/router.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
