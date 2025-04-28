import React, { useEffect, useState } from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import { Outlet } from 'react-router-dom'
import axiosInstance from '@/services/axiosInstance' // Don't forget this!

function Dashboard() {
  const [productCount, setProductCount] = useState(0)
  const [userCount, setUserCount] = useState(0) 
  const [orderCount, setorderCount] = useState(0) 

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axiosInstance.get('/products') // Assuming this returns all products
        setProductCount(response.data.products.length)
      } catch (error) {
        console.error("Failed to fetch product count", error)
      }
    }

    fetchProductCount()
  }, [])

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axiosInstance.get('/auth/users') // Adjust endpoint if needed
        setUserCount(response.data.length) // Assuming response contains the users' array
      } catch (error) {
        console.error("Failed to fetch user count", error)
      }
    }

    fetchUserCount()
  }, [])

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axiosInstance.get('/Checkout') // Adjust endpoint if needed
        setorderCount(response.data.length) // Assuming response contains the orders' array
      } catch (error) {
        console.error("Failed to fetch order count", error)
      }
    }

    fetchOrderCount()
  }, [])



  return (
    <div>
      <SidebarInset>
        <SiteHeader title="Admin Panel" />
        <div className="flex flex-1 flex-col bg-gray-100">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards productCount={productCount}  userCount ={userCount} orderCount={orderCount}/>
              <div className="px-4 lg:px-6">
                {/* <ChartAreaInteractive /> */}
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
  )
}

export default Dashboard
