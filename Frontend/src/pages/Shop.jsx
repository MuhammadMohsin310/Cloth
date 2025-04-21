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
    { name: "Cloths", items: 5, img: './men-sample.jpg' },
    { name: "Shoes", items: 10, img: './children-sample.jpg' },
    { name: "Accessories", items: 15, img: './women-1.jpg' },
    { name: "Electronics", items: 20, img: './men-sample.jpg' },
    { name: "Home Appliances", items: 25, img: './children-sample.jpg' },
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
        toast.success("Products loaded successfully!");
      } catch (error) {
        console.error("Failed to fetch products ❌", error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <>
      <section className="w-full   ">
        <div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
          {/* Background Image */}
          <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
          {/* <h1 className="relative text-white text-5xl font-bold bg-transparent"> Home</h1> */}
        </div>

        {/* //SHOP SECTION */}
        <div className=" w-full mx-auto max-w-7xl  bg-gray-3 h-auto py-10  ">
          <div className="flex  justify-between items-center lg:mx-0 mx-10 lg:flex-row flex-col">
            <div>
              {/* <h1 className="text-2xl font-bold">Shop</h1> */}
            </div>
            <div></div>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-1 mx-10 gap-4 mt-10">
            {Category.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-center items-center h-96 flex-col"
                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="text-white text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.items} items</div>
              </Card>
            ))}
          </div>

        </div>

        {/* //SHOP SECTION */}
        {/* Brands */}
        <div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest mt-6">
          {/* Background Image */}
          <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
          {/* <h1 className="relative text-white text-5xl font-bold bg-transparent"> Home</h1> */}
        </div>

        {/* <hr /> */}
        {/* Brands */}
        {/* Products */}
        <div className="max-w-7xl mx-auto  h-auto py-10">
          <div className="grid lg:grid-cols-4 grid-cols-1 mx-10 gap-4 mt-10 ">
            {products?.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-md rounded-lg  mt-4 flex  h-96 flex-col gap-7 "
              >
                <div className=" h-56 w-full bg-gray-300 overflow-hidden bg-center bg-cover"
                  style={{ backgroundImage: `url(./children-sample.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


                </div>
                <div className="text-left px-3 flex flex-col gap-7">
                  <div>
                    <div className="text-lg font-semibold">Product Name</div>
                    <div className="text-xs text-gray-500">
                      Product Description Will be here and it will be long
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-md  ">
                      <span className="line-through decoration-red-500 text-red-800 text-xs">
                        99$
                      </span>{" "}
                      <span className="font-bold text-xl">66$</span>
                    </div>
                    <div>
                      <button className="text-xs bg-green-200 p-[4px] rounded-lg">30% off</button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious>
                    <span>Previous</span>
                  </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>
                    <span>1</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext>
                    <span>Next</span>
                  </PaginationNext>
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
