import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ToastNotification from './ToastNotification'




function Layout() {
  return (
    <>
   <ToastNotification />
   <Navigation />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout