import React from "react";
import { useEffect, useState } from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboardIcon, ListIcon, FolderIcon, UsersIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Optional, if you're using className helper

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { href } from "react-router-dom";


const data = {
  user: {
    name: "aarij",
    email: "aarij@gmail.com",
    avatar: "./sample shirt.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/wp-admin/dashboard",
      icon: LayoutDashboardIcon,
      
      
    },
    {
      title: "Orders",
      url: "/wp-admin/orders",
      icon: ListIcon,
    },
    {
      title: "Products",
      url: "/wp-admin/products",
      icon: FolderIcon,
    },
    {
      title: "Users",
      url: "/wp-admin/users",
      icon: UsersIcon,
    },
  ],
};

export function AppSidebar(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar collapsible="offcanvas" {...props}>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="data-[slot=sidebar-menu-button]:!p-1.5"
                >
                  <a href="#">
                    <img
                      src="./sample shirt.jpg"
                      alt=""
                      className="h-5 w-5 rounded-xl"
                    />
                    <span className="text-base font-semibold text-red-600">
                      Store Name
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <NavMain items={data.navMain} />
          </SidebarContent>

          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between md:hidden">
    <div className="flex items-center gap-2">
      <button>
        <img
          src="./sample shirt.jpg"
          alt="avatar"
          className="h-8 w-8 rounded-full"
        />
      </button>
      <span className="font-semibold text-red-600">Store Name</span>
    </div>

    <div className="flex items-center gap-4 ml-auto">
   

<DropdownMenu>
  <DropdownMenuTrigger><NavUser user={data.user} /></DropdownMenuTrigger>

</DropdownMenu>



    </div>
  </nav>
)}

    </>
  );
}
