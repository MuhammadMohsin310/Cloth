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
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Shop from './pages/Shop'
import ProductDesc from './pages/ProductDesc'

import { store } from "./redux/store";
import Checkout from "./pages/Checkout";
import Collection from "./pages/Collection";
import Home from "./pages/Home";

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
