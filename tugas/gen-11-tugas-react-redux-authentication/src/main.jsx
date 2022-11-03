import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import { Provider } from 'react-redux'
import store from './store'

import Home from './Home'
import Todo from './Todo'
import Quote from './Quote'
import Login from './Login'
import ProtectedLayout from './ProtectedLayout'

const router = createBrowserRouter([
  {
    path: '', element: <ProtectedLayout />, children: [
      { path: '/', element: <Home /> },
      { path: '/todo', element: <Todo /> },
      { path: '/quote', element: <Quote /> },
    ]
  },

  { path: '/login', element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)