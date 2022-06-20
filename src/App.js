import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductItem from './pages/ProductItem';
 import Register from './pages/Register';
 import Home from './pages/Home';
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
 import ProductList from './pages/ProductList';
import { useEffect } from 'react';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Pay from './pages/Pay';
import Sucess from './pages/Sucess';
import Test from './pages/Test';

const App = () => {


  return   (
            <div>
              <Router>
                <Routes>
                  <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/products/:category" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductItem />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/pay' element={<Pay/>}/>
                        <Route path='/sucess' element={<Sucess/>}/>
                  </Route>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                </Routes>
              </Router>
            </div>
  )
}
export default App;
