import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, Route, Router } from "react-router-dom";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import { Provider } from "react-redux";

import Contact from "./pages/Contact";
import LayoutSidebar from "./components/LayoutSidebar";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Shop from './Pages/Shop'
import ProductDesc from './Pages/ProductDesc'

import { store } from "./redux/store";
import Checkout from "./Pages/Checkout";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productdesc" element={<ProductDesc />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collection" element={<Collection />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart/>} /> */}
      </Route>

      <Route path="/wp-admin" element={<LayoutSidebar />}>
        <Route path="" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />-
    </StrictMode>
  </Provider>
);
