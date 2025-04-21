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
            <SiteHeader title="User Page" />
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
    <TableCaption className="py-2">A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] px-4 py-2 text-red-600">Id</TableHead>
        <TableHead className="px-4 py-2 text-red-600">Name</TableHead>
        <TableHead className="px-4 py-2 text-red-600" text-red-600>Address</TableHead>
        <TableHead className="text-right px-4 py-2 text-red-600">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium px-4 py-2">User_id</TableCell>
        <TableCell className="px-4 py-2">Aarij</TableCell>
        <TableCell className="px-4 py-2">1482 Oakridge Avenue Springfield, United States</TableCell>
        <TableCell className="text-right px-4 py-2">$298.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>



      </div>

    </>
  )
}

export default Users