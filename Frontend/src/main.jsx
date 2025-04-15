import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CartProvider } from './context/CartContext'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from './components/Layout'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
import About from './pages/About'
// import Home from './pages/Home'
import Home from './pages/Home'
import Contact from './pages/Contact'

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<Layout />}> 
      
      <Route path="about" element={<About/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/menu" element={<Menu />} />
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
