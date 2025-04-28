import React, { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import axiosInstance from "@/services/axiosInstance";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Users() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching users...");
        const response = await axiosInstance.get("/auth/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("users"); // Adjust the endpoint as needed
        console.log(response.data);
        setUsers(response.data); // Set the fetched users to state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call the fetch function
  }, []);


  return (
    <>
      <div className="">
        <div>
          <SidebarInset>
            <SiteHeader title="Users" />
            <div className="flex flex-1 flex-col bg-gray-100 ">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6"></div>
              </div>
            </div>
          </SidebarInset>
        </div>

        <div className="px-6">
  <table className="bg-white rounded-md w-full">
    <caption className="py-2">List of All Users.</caption>
    <thead>
      <tr>
        <th className="w-[100px] px-4 py-2 text-red-600">Id</th>
        <th className="w-[100px] px-4 py-2 text-red-600">no.</th>
        <th className="px-4 py-2 text-red-600">Name</th>

        <th className="text-right px-4 py-2 text-red-600">User Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index) => (
        <tr key={user._id} className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors text-center">
          <td className="font-medium px-4 py-2">{index +1}</td>
          <td className="font-medium px-4 py-2">{user._id}</td>
          <td className="px-4 py-2">{user.username}</td>
 
          <td className="text-right px-4 py-2">{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </>
  );
}

export default Users;
