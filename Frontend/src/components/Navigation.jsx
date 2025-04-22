import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from react-icons
import { Menu, X } from "lucide-react"; // Import Hamburger and Close icons
import { MdDelete } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { addToCart,removeFromCart,deleteFromCart } from "@/features/cart/cartSlice";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; ``
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

const Navbar = () => {
  const dispatch = useDispatch();
  const CartItems=useSelector((state) => state.cart.cartItems);
  console.log(CartItems[0])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-black text-3xl font-bold">Store Name</h1>
          </Link>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navbar Links - Desktop */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden lg:flex items-center lg:order-2 space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center bg-white">
                  <img className="h-8" src="6596121.png" alt="User Avatar" />
                  <span className="ml-2 text-gray-700">Hi, User</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white rounded-md hover:bg-red-600 text-sm px-4 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="list-none">
                  <Sheet className="bg-white">
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-transparent flex items-center space-x-2"
                      >
                        <FaShoppingCart /> {/* Cart icon */}
                        <span>Cart</span>
                      </Button>
                    </SheetTrigger>

                    <SheetContent className="bg-white transition-transform duration-300 ease-in-out transform">
  <SheetHeader>
    <SheetTitle>Add To Cart</SheetTitle>
    <SheetDescription>
      Make changes to your profile here. Click save when you're done.
    </SheetDescription>
  </SheetHeader>

  {/* Cart items container */}
  <div className="flex flex-col gap-1 ">
    {CartItems.map((item, index) => (
       <Card key={index} className="w-full h-20 flex items-center justify-between px-4 rounded-md bg-gray-100">
       {/* Left Side: Product Info */}
       <div className="flex items-center gap-2 justify-center">
         <div className="bg-gray-800 h-7 w-7"></div>
         <div>
           <h1 className="text-sm font-semibold">{item.name}</h1>
           <span className="text-xs text-gray-500">Quantity : {item.quantity}</span>
         </div>
       </div>
 
       {/* Right Side: Controls */}
       <div className="flex items-center gap-3">
         <button onClick={()=>{dispatch(addToCart(item))}} className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">
           +
         </button>
         <button onClick={()=>{dispatch(removeFromCart(item))}}  className="px-2 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
           -
         </button>
         <div onClick={()=>{dispatch(deleteFromCart(item))}} className="hover:text-red-600 cursor-pointer text-lg">
           <MdDelete />
         </div>
       </div>
     </Card>
    ))}
   

    </div>
    {/* Optional HR divider */}
  

  <SheetFooter>
    <SheetClose asChild>
      <Button type="submit">Save changes</Button>
    </SheetClose>
  </SheetFooter>
</SheetContent>

                  </Sheet>
                </li>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md mt-2 rounded-md absolute w-full left-0">
            <ul className="flex flex-col text-center py-2">
              <li className="py-2 border-b">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="py-2 border-b">
                <NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>
                  Menu
                </NavLink>
              </li>
              <li className="py-2 border-b">
                <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
                  Cart
                </NavLink>
              </li>
              <li className="py-2 border-b">
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>

              {/* Mobile Auth Buttons */}
              {isAuthenticated ? (
                <li className="py-2">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white rounded-md hover:bg-red-600 text-sm px-4 py-2"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  {/* <div className="flex justify-center gap-3">
                    <button className="py-5">
                      <Link
                        to="/login"
                        className=" mt-2 bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4 py-2"
                      >
                        Login{" "}
                      </Link>
                    </button>
                    <button className="py-3">
                      <Link
                        to="/signup"
                        className="mt-2 bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4  py-2"
                      >
                        Sign Up
                      </Link>
                    </button>
                  </div> */}
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
