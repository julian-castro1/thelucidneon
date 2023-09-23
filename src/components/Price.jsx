import styled from 'styled-components';
import PropTypes from 'prop-types';

function Price({price}){
    const formattedPrice = `$${price}.00`;

    return(
        <PriceContainer className="price">{formattedPrice}</PriceContainer>
    )
}

Price.propTypes = {
    price: PropTypes.number.isRequired
};

const PriceContainer = styled.span`
    font-weight: 800;
    font-size: 20px;
    padding-left: 10px;
`;

export default Price;