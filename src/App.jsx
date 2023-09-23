import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CartPopup from './components/CartPopup';
import Product from './components/Product';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import './App.css'
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import CustomOrderPage from './CustomOrderPage';
import ProductsPage from './ProductsPage';
import CheckoutPage from './CheckoutPage';



function App() {
  const [cart, setCart] = useState([]); // array of product objects
  const [showingCart, toggleCart] = useState(false);  // cart popup toggle


  function showCartPopup(){
    toggleCart(!showingCart);
  }

  function addToCart(color="red", track, size, img){
    // Check if the product already exists in the cart
    const existingProduct = cart.find(product => product.track === track && product.color === color);

    if (existingProduct) {
        changeQty(track, 1, color);
    } else {
        let curProduct = new Product(color, track, size, img, 1); // Assuming the 5th argument is qty and default is 1
        setCart(prevProducts => [...prevProducts, curProduct]);
    }
  }

  function changeQty(track, qty, color){
    const updatedCart = cart.map(product => {
        if(product.track === track && product.color === color){
          if(product.qty + qty > 0)
            return {...product, qty: product.qty + qty};
          else{
            // remove from the vector
            return undefined;
          }
        }
        return product;
    }).filter(product => product !== undefined);
    setCart(updatedCart);
  }


  return (
    <Router>
      <div style={{ height: '90%'}}>
        <nav>
          <Header cart={cart} showCartPopup={showCartPopup} showingCart={showingCart}/>
        </nav>

        <PageContainer>
          <MainContainer>
            <Routes>
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/custom-order" element={<CustomOrderPage />} />
              <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </MainContainer>
          {showingCart && <CartPopup cart={cart} changeQty={changeQty}/>}
        </PageContainer>
      </div>
    </Router>
  );
}

  
const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100%;
`;

export default App;
