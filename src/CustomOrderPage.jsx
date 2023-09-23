import React, { useState } from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import CartPopup from './components/CartPopup';

function CustomOrderPage(){
    return(
            <h1>custom</h1>
    )
}

const PageContainer = styled.div`
  display: flex;
  overflow-wrap: normal;
  flex-wrap: wrap;
  gap: 10px;

  padding: 2rem;

    width:100%;

  align-items: center;
  justify-content: center;
`;

export default CustomOrderPage;