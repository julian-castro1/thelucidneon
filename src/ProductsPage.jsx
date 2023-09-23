import React from 'react'
import styled from 'styled-components';
import ProductCard from './components/ProductCard';
import { products } from './components/products';
import PropTypes from 'prop-types';
import './App.css'



export const MyContext = React.createContext();
function ProductsPage({addToCart}) {


  return (
      <>
            <ProductsContainer>
              <MyContext.Provider value={addToCart}>
                {products.map((product)=>{
                  return(
                    <ProductCard
                      track={product}
                      color="red"
                      key={product}
                    />
                  )
                })}
              </MyContext.Provider>
            </ProductsContainer>
    </>
  )
}

const ProductsContainer = styled.div`
  display: flex;
  overflow-wrap: normal;
  flex-wrap: wrap;
  gap: 10px;

  padding: 2rem;

  align-items: center;
  justify-content: center;
`;

ProductsPage.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default ProductsPage
