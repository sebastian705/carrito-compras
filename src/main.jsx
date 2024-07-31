import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './page/ErrorPage.jsx'
import ProductPage from './page/ProductPage.jsx'
import ProductsPage from './page/ProductsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/product/:id',
    element: <ProductPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
