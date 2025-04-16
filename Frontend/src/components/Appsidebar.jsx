
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"




import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Order",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },

]

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-red-600 font-bold text-md'>Store Name</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
              ))}

              
            </SidebarMenu>

            <div className="relative h-[75vh] flex flex-col bg-white">
  {/* Scrollable content area */}
  <div className="flex-1 overflow-y-auto">
    {/* Other sidebar items */}
  </div>

  {/* Fixed bottom user section */}
  <div className="list-none bg-white px-4 py-3 border-t border-gray-200">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton className="h-14 w-full flex items-center">
          <User2 />
          <div className="ml-3 text-left">
            <h1 className="font-bold">Aarij</h1>
            <p className="text-sm text-muted-foreground">aarij@gmail.com</p>
          </div>
          <ChevronUp className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="top"
        align="start"
        className="w-full bg-gray-100 border-black shadow-md">

        <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>



          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
    </Sidebar>


  )
}
