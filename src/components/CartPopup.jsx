import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartCard from './CartCard';

function CartPopup({cart, changeQty}){
    console.log("DEBUG: in CartPopup")

    return(
        <CartContainer>
            <CartTitle className='test'>Cart:</CartTitle>
            <DividerLine/>
            {
                cart.length === 0 ?
                    <NothingText>Nothing in your cart!</NothingText> :
                    cart.map((product) => {
                        return (
                            <CartCard key={product.track} product={product} changeQty={changeQty}/>
                        )
                    })
            }
        </CartContainer>
    )
}

CartPopup.propTypes = {
    cart: PropTypes.array.isRequired,
    changeQty: PropTypes.func.isRequired,
};

const CartContainer = styled.div`
    background-color: #252525;
    padding: 1rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;
const CartTitle = styled.div`
    padding-top: .3rem;
    padding-bottom: .3rem; 
    font-weight: 600;
    width: 100%;
    text-align: left;
`;
const NothingText = styled.div`
    padding-top: 4rem;
    color: #525252;
    font-weight: 600;
`;
export const DividerLine = styled.div`
    background-color: gray;
    height: 1px;
    width: 15vw;

    margin-bottom: 1rem;
`;

export default CartPopup;