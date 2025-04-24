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



function Users() {
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
    <TableCaption className="py-2">List of All Products.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] px-4 py-2 text-red-600">Id</TableHead>
        <TableHead className="px-4 py-2 text-red-600">Name</TableHead>
        <TableHead className="px-4 py-2 text-red-600" text-red-600>Price</TableHead>
        <TableHead className="px-4 py-2 text-red-600">Description</TableHead>
        <TableHead className="px-4 py-2 text-red-600" text-red-600>Category</TableHead>

      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium px-4 py-2">001</TableCell>
        <TableCell className="px-4 py-2">Brown Jacket</TableCell>
        <TableCell className="px-4 py-2">2$</TableCell>
        <TableCell className="px-4 py-2">A stylish brown jacket offering timeless appeal and cozy comfort for any season.</TableCell>
        <TableCell className="px-4 py-2">Men</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>



      </div>

    </>
  )
}

export default Users