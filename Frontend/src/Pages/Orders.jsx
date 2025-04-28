import React from 'react'
import { AppSidebar } from "@/components/app-sidebar"
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useEffect, useState } from 'react';
import axiosInstance from '@/services/axiosInstance';


function Users() {

const [order , setOrders] = useState([]);

useEffect(() => {
  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get("/Checkout"); // Adjust the endpoint as needed
      console.log(response.data);
      setOrders(response.data); // Set the fetched orders to state
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  fetchOrders(); // Call the fetch function
}, [])

const count = 0

  return (
    < >

      <div className=''>
        <div>
          <SidebarInset>
            <SiteHeader title="Orders" />
            <div className="flex flex-1 flex-col bg-gray-100 ">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

                </div>
              </div>
            </div>
          </SidebarInset>
        </div>

        <div className="px-6"> {/* This adds left/right padding */}
        <Table className="bg-white rounded-md w-full">
        <TableCaption className="py-2">List of All Orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] px-4 py-2 text-red-600">S.no</TableHead>
            <TableHead className="px-4 py-2 text-red-600">Customer Name</TableHead>
            <TableHead className="px-4 py-2 text-red-600">Phone No.</TableHead>
            <TableHead className="px-4 py-2 text-red-600">Orders</TableHead>
            {/* <TableHead className="px-4 py-2 text-red-600">Category</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map over the orders array and display each order */}
          {order.length > 0 ? (
            order.map((order , i) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium px-4 py-2">{i + 1}</TableCell>
                <TableCell className="px-4 py-2">{order.name}</TableCell>
                <TableCell className="px-4 py-2">{order.phone}</TableCell>
                <TableCell className="px-4 py-2">{order.description}</TableCell>
                {/* <TableCell className="px-4 py-2">{order.category}</TableCell> */}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center py-4">No orders found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
</div>



      </div>

    </>
  )
}

export default Users