import { useContext } from "react";
import styled from 'styled-components';
import { MyContext } from "../ProductsPage";
import PropTypes from 'prop-types';
import cartIcon from "../assets/add_to_cart.svg"


function AddToCartButton({color, track, size, img}){
    const addToCartFunc = useContext(MyContext)

    const AddToCartContainer = styled.button`
        &:hover{
    cursor: pointer;
  }
    `;
    const IconContainer = styled.img`
    
    `;
    function clickHandler(){
        addToCartFunc(color, track, size, img);
    }

    return(
        <AddToCartContainer onClick={clickHandler}>
            <IconContainer src={cartIcon}></IconContainer>
        </AddToCartContainer>
    )
}

AddToCartButton.propTypes = {
    color: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default AddToCartButton;