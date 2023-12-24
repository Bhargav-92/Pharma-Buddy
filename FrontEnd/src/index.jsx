import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact';
import Nopage from './Pages/Nopage';
import Hero from './Pages/Hero';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Appbar from './Component/MainAppbar/Appbar'
import Product from './Pages/Product';
import Consultancy from './Pages/Consultancy';
import ProtectedRoutes from './Component/Services/ProtectedRoutes';
import Profile from './Pages/Profile';
import CartProvider from './CartContext';
import Bill from './Component/Product/Checkout';
import Cancle from './Pages/Cancel'
import Success from './Pages/Success'



function Index() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Use ProtectedRoutes to wrap all routes */}
          <Route path="/*" element={
            <ProtectedRoutes
              Component={() => (
                <>
                  <Appbar />
                  <Routes>
                    <Route index path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/consultancy" element={<Consultancy />} />
                    <Route path="/checkout" element={<Bill />} />
                    <Route path="/cancel" element={<Cancle />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="*" element={<Nopage />} />
                  </Routes>
                </>
              )}
            />
          }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />)


