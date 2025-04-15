import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CartProvider } from './context/CartContext'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from './components/Layout'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
// import Home from './pages/Home'

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<Layout />}> 
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart/>} /> */}
    </Route>

<Route>
{/* <Route path="/login" element={<Login />}/>
<Route path="/signup" element={<Signup />} /> */}
{/* <Route path="/logout" element={<Logout />} /> */}
</Route>

 </Route>

  )   
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
    
  </StrictMode>
);
