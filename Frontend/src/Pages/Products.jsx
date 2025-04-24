import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import { MdDelete } from "react-icons/md";
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axiosInstance from '@/services/axiosInstance';

function Products() {
  const [showForm, setShowForm] = useState(false)




  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch products from the API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/");
        setProducts(response.data.products); // Assuming the response contains a products array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const newProduct = {
      id: String(products.length + 1).padStart(3, '0'),
      ...data,
      price: `$${data.price}`
    }
    setProducts([...products, newProduct])
    setShowForm(false)
    reset()



    try {
      const response = await axiosInstance.post("/products/", data);
      const token = response.data.token;
      if (token) {
        Cookies.set("token", token, {
          expires: 7, // Token expires in 7 days
          secure: false, // Use true in production (HTTPS)
          sameSite: "strict",
        });

      }
    } catch (error) {
      console.error("Error:", error);
      // Display error message to the user
      alert("something went wrong");
    }







  }

  const deleteProduct = (id) => {
    const filtered = products.filter(product => product.id !== id)
    setProducts(filtered)
  }

  return (
    <>
      <div>
        <SidebarInset>
          <SiteHeader title="Your Products" />

          {/* Add Product Button Top-Right */}
          <div className="flex justify-end px-6 pt-4">
            <Dialog open={showForm} onOpenChange={setShowForm}>
              <DialogTrigger asChild>
                <button className="bg-slate-700 text-white p-2 rounded-md">+ Add Product</button>
              </DialogTrigger>

              <DialogContent className="bg-white border-none  ">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>Fill in the details to create a new product.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Product name is required" })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      {...register("price", { required: "Price is required" })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Description</label>
                    <textarea
                      {...register("description")}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">Category</label>
                    <input
                      type="text"
                      {...register("category")}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button onSubmit={handleSubmit(onSubmit)} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                      Submit
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </SidebarInset>

        {/* Products Table */}
        <div className="px-6 mt-6">
          <Table className="bg-white rounded-md w-full">
            <TableCaption className="py-2">List of All Products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] px-4 py-2 text-red-600">S.No</TableHead>
                <TableHead className="px-4 py-2 text-red-600">Name</TableHead>
                <TableHead className="px-4 py-2 text-red-600">Price</TableHead>
                <TableHead className="px-4 py-2 text-red-600">Description</TableHead>
                <TableHead className="px-4 py-2 text-red-600">Category</TableHead>
                <TableHead className="px-4 py-2 text-red-600">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium px-4 py-2">{index + 1}</TableCell>
                  <TableCell className="px-4 py-2">{product.name}</TableCell>
                  <TableCell className="px-4 py-2">{product.price}</TableCell>
                  <TableCell className="px-4 py-2">{product.desc}</TableCell>
                  <TableCell className="px-4 py-2">{product.category}</TableCell>
                  <TableCell className="px-4 py-2">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded-md text-sm"
                    >
                      <MdDelete />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Products
