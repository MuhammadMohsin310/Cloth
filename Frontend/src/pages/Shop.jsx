import React from "react";
import Breadcrumbdemo from "../components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axiosInstance from "../services/axiosInstance";
import { toast } from "react-toastify";
const Shop = () => {
  const [Category, setCategory] = useState([
    { name: "Cloths", items: 5 },
    { name: "Shoes", items: 10 },
    { name: "Accessories", items: 15 },
    { name: "Electronics", items: 20 },
    { name: "Home Appliances", items: 25 },
  ]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?page=${currentPage}&limit=${itemsPerPage}`
        );
        console.log(response.data); // ✅ Should show the full response now
        setProducts(response.data.products);
        //
        toast.success('Products loaded successfully!');
        
      } catch (error) {
        console.error("Failed to fetch products ❌", error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <>
      <section className="w-full   ">
        {/* //SHOP SECTION */}
        <div className=" w-full mx-auto max-w-7xl  bg-gray-3 h-auto py-10  ">
          <div className="flex  justify-between items-center lg:mx-0 mx-10 lg:flex-row flex-col">
            <div>
              <h1 className="text-2xl font-bold">Shop</h1>
            </div>
            <div>
              <Breadcrumbdemo />
            </div>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-1  mx-10 gap-4 mt-10">
            {Category.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-center items-center h-96 flex-col"
              >
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.items} items</div>
              </Card>
            ))}
          </div>
        </div>
        <hr />
        {/* //SHOP SECTION */}
        {/* Brands */}
        <div className="w-full  bg-gray-200 opacity-85 py-10 flex justify-center items-center h-88    ">
          <div>
            <h1 className="text-4xl font-bold">Here are our brands</h1>
          </div>
        </div>
        <hr />
        {/* Brands */}
        {/* Products */}
        <div className="max-w-7xl mx-auto  h-auto py-10">
          <div className="grid grid-cols-4 gap-4 mt-10 ">
            {products?.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-md rounded-lg  mt-4 flex  items-center h-96 flex-col gap-10"
              >
                <div className="h-56 w-full bg-gray-300 "></div>
                <div className="text-center flex flex-col gap-7">
                  <div>
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                  <div>
                    <div className="text-md ">{item.price}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={()=>{setCurrentPage(p=>Math.max(p-1,1))}}>{i+1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        {/* Products */}
      </section>
    </>
  );
};

export default Shop;
