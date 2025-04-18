import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CartProvider } from './context/CartContext'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
// import Home from './pages/Home'
import Home from './pages/Home'
import Contact from './pages/Contact'
import LayoutSidebar from './components/LayoutSidebar'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import Products from './Pages/Products'
// import { ProfileForm } from './components/ui/form'
import Orders from './Pages/Orders'

// import AdminPanel from './Pages/AdminPanel'
import Shop from './pages/Shop'

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart/>} /> */}
      </Route>


      <Route path="/wp-admin" element={<LayoutSidebar />}>
        <Route path="" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>


    </Route>

  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
);
