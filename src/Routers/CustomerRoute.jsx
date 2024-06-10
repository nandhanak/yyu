import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Card from '../Card/Card'
import Navigation from '../Navigations/Navigation'
import Footer from '../Components/Footer'
import Product from '../Product/Product'
import ProductDetails from '../Products/ProductDetails'
import Checkout from '../Checkout/Checkout'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'

export default function CustomerRoute() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
          <Route path='/login'element={<HomePage/>}></Route>
          <Route path='/signup'element={<HomePage/>}></Route>
          <Route path='/'element={<HomePage/>}></Route>
            <Route path='/cart'element={<Card/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThre'element={<Product/>}></Route>
            <Route path='/product/:ProductId'element={<ProductDetails/>}></Route>
            <Route path='/checkout'element={<Checkout/>}></Route>
            <Route path='/account/order'element={<Order/>}></Route>
            <Route path='/account/order/:orderId'element={<OrderDetails/>}></Route>

        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
 {/* <Product/>*/}
  {/*<ProductDetails/>*/}
  {/*<Card/>*/}
  {/*<Checkout/>*/}
  {/*<Order/>*/}
  {/*<OrderDetails/>*/}