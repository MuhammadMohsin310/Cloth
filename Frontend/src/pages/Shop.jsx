import React from "react";
import Breadcrumbdemo from "../components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { FaCartArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import e from "cors";
import { useNavigate } from "react-router-dom";
import { addCategory, deleteCategory } from "@/features/category/categorySlice";
const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Category, setCategory] = useState([
    { name: "Cloths", items: 5, img: "./men-sample.jpg" },
    { name: "shoes", items: 10, img: "./children-sample.jpg" },
    { name: "Accessories", items: 15, img: "./women-1.jpg" },
    { name: "Electronics", items: 20, img: "./men-sample.jpg" },
    { name: "Home Appliances", items: 25, img: "./children-sample.jpg" },
  ]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?page=${currentPage}&limit=${itemsPerPage}`
        );

        setProducts(response.data.products);
        console.log(response.data.products, "products");
        setTotalPages(response.data.totalPages);
      
      } catch (error) {
 toast.error("Failed to fetch products ❌", error);
      }
    };
    fetchProducts();
  }, [currentPage]);


  


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleCategory = (e, item) => {
    e.preventDefault(); // Prevent default link behavior
    dispatch(deleteCategory(item));
    navigate("/collection"); // Navigate to the collection page

    dispatch(addCategory(item.name)); // Dispatch the category to the Redux store
  };

  return (
    <>
      <section className="w-full   ">
        <div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
          {/* Background Image */}
          <img
            src="./banner.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full opacity-90"
            style={{ objectFit: "cover", backgroundRepeat: "repeat" }}
          />
          <h1 className="relative text-white tracking-tighter lg:text-4xl md:text-4xl text-xl font-bold bg-transparent">
            Your Favorites, Organized – Browse by What Matters
          </h1>
        </div>

        {/* //SHOP SECTION */}
        <div className=" w-full mx-auto max-w-7xl  bg-gray-3 h-auto py-10  ">
          <div className="flex  justify-between items-center lg:mx-0 mx-10 lg:flex-row flex-col">
            <div>{/* <h1 className="text-2xl font-bold">Shop</h1> */}</div>
            <div></div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2   mx-10 gap-4 mt-10">
            {Category.map((item, index) => (
              <Link to="/collection">
                {" "}
                <Card
                  onClick={(e) => handleCategory(e, item)}
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-center items-center lg:h-96 md:h-96 h-70 flex-col"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="text-white text-lg font-semibold">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.items} items
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* //SHOP SECTION */}
        {/* Brands */}
        <div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest mt-6">
          {/* Background Image */}
          <img
            src="./banner.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full opacity-90"
            style={{ objectFit: "cover", backgroundRepeat: "repeat" }}
          />
          <h1 className="px-1 relative text-white tracking-tighter lg:text-4xl md:text-4xl text-xl font-bold bg-transparent">
            {" "}
            Save Big Today – Up to 50% Off Sitewide!
          </h1>
        </div>

        {/* <hr /> */}
        {/* Brands */}
        {/* Products */}
        <div className="max-w-7xl mx-auto  h-auto py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  mx-10 gap-4 mt-10 ">
            {products?.map((product) => (
              <Card
                key={product._id}
                className="bg-white shadow-md rounded-lg  mt-4 flex  lg:h-88 md:h-88 h-66 flex-col gap-7 "
                onClick={() => {
                  console.log(product._id);
                }}
              >
                <div
                  className=" h-56 w-full flex justify-end p-2 bg-gray-300 overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage: `url(./children-sample.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <button className="text-xs bg-green-200 p-[4px] rounded-lg">
                      30% off
                    </button>
                  </div>
                </div>
                <div className="lg:text-left  px-3 flex flex-col  lg:gap-7 gap-5  pb-3 ">
                  <div>
                    <div className="text-md font-semibold">{product.name}</div>
                    <div className="lg:line-clamp-2 line-clamp-1 lg:text-sm text-xs text-gray-500  overflow-hidden text-ellipsis">
                      {product.desc}
                    </div>
                  </div>
                  <div className="flex justify-between lg:flex-row  items-center">

                    <div className="text-md ">
                      <span className="line-through decoration-red-500 text-red-800 text-xs">
                      ${product.price}
                      </span>{" "}
                      <span className="font-bold lg:text-lg text-xs ">
                      ${product.actualprice}
                        
                      </span>
                    </div>
                    <div>
                      <Button
                        className=" text-white bg-black lg:text-normal text-xs hover:bg-gray-700 rounded-lg md:rounded-lg  "
                        // onClick={() => handleAddToCart(product)}
                        onClick={() => {
                          console.log("Trying to add", product._id);
                          dispatch(addToCart(product));
                        }}
                      >
                        <FaCartArrowDown  />
                        <span className="ml-2 hidden sm:inline">Add To Cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Pagination className="cursor-pointer my-5">
              <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  >
                    <span>Previous</span>
                  </PaginationPrevious>
                </PaginationItem>

                {/* First Page */}
                <PaginationItem>
                  <PaginationLink
                    isActive={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                  >
                    <span>1</span>
                  </PaginationLink>
                </PaginationItem>

                {/* Dots before current if needed */}
                {currentPage > 3 && (
                  <PaginationItem>
                    <span className="px-2">...</span>
                  </PaginationItem>
                )}

                {/* Current, previous, next */}
                {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
                  if (page > 1 && page < totalPages) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                        >
                          <span>{page}</span>
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  return null;
                })}

                {/* Dots after current if needed */}
                {currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <span className="px-2">...</span>
                  </PaginationItem>
                )}

                {/* Last Page */}
                {totalPages > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      isActive={currentPage === totalPages}
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      <span>{totalPages}</span>
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                  >
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
