import styled from 'styled-components';
import PropTypes from 'prop-types';

function CartLink({cartCount, showCartPopup, showingCart}){

    return(
        <LinkContainer onClick={showCartPopup} showingCart={showingCart}>
            <Link>cart:</Link>
            <CartCount>{cartCount}</CartCount>
        </LinkContainer>
    )
}
const LinkContainer = styled.div`
    width: 10vw;

    background-color: #252525;
    border-radius: 40px;
    border-radius: ${props => props.showingCart && "40px 0px 0px 40px"};
    padding: 1rem;
    margin-right: 0;
    margin-top: 1.6vw;

    height: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
    
`;
const Link = styled.div`
    font-weight: 600;
    color: #9d9d9d;
    padding-right: 4px;
`;
const CartCount = styled.span`
    font-weight: 600;
    color: #9d9d9d;
`;

CartLink.propTypes = {
    cartCount: PropTypes.number.isRequired,
    showCartPopup: PropTypes.func.isRequired,
    showingCart: PropTypes.bool.isRequired,
};

export default CartLink;