import React from "react";
import {Link , NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10 bottom-0">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-200">
       
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
          Made with style, crafted for comfort.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
              Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Return & Exchange Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Store Locator
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: aarijhere10@gmail.com</li>
            <li>Phone: +92 XXX XXX XXXX</li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f "> </i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
      <p className="text-center text-gray-400 mt-10 ">
        &copy; {new Date().getFullYear()} Clothing . All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
