
 
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
 

import React from 'react'

const Breadcrumbdemo = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
      <BreadcrumbEllipsis className="h-4 w-4" />
      <span className="sr-only">Toggle menu</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}




export default Breadcrumbdemo