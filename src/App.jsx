import React from "react";
import Navigation from "../src/Navigations/Navigation";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Product from "./Product/Product";
import ProductDetails from "./Products/ProductDetails";
import Card from "./Card/Card";
import Checkout from "./Checkout/Checkout";
import DeliverAddress from "./Checkout/DeliveryAddress/DeliverAddress";
import Order from "./Order/Order";
import OrderDetails from "./Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/*" element={<CustomerRoute/>}></Route>
    </Routes>
   
  
   

    </div>
  );
}

export default App;
