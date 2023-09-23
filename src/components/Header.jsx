import styled from 'styled-components';
import HeaderLink from './HeaderLink';
import CartLink from './CartLink';
import PropTypes from 'prop-types';
import logo from "../assets/logo_gradient.png"
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header({cart, showCartPopup, showingCart}){

    const navigate = useNavigate();

    const goHome = () => { navigate('/'); }

    return(
        <HeaderContainer showingCart={showingCart}>
            <HeaderLink page="products"/>
            <HeaderLink page="about-us"/>
            <HeaderLogoContainer onClick={goHome}>
                <HeaderLogo src={logo}/>
            </HeaderLogoContainer>
            <HeaderLink page="custom-order"/>
            <CartLink showingCart={showingCart} showCartPopup={showCartPopup} cartCount={cart.length}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0px 30px 10px 30px;
    padding-right: ${props => props.showingCart && '0'};

    /* background-color: #252525; */
`;
const HeaderLogoContainer = styled.div`
    background-color: #252525;
    padding: 1rem;
    border-radius: 0 0 35px 35px;
    padding-top: 1.3rem;


    &:hover{
        cursor: pointer;
    }
`;
const HeaderLogo = styled.img`
    src:${props => props.logo};
    height: 5vw;
    max-height: 60px;
`;
Header.propTypes = {
    cart: PropTypes.array.isRequired,
    showCartPopup: PropTypes.func.isRequired,
    showingCart: PropTypes.bool.isRequired,
};



export default Header;