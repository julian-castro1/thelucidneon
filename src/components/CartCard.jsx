import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductQtyControl from './ProductQtyControl';


function CartCard({product, changeQty}){
    // product: color, track, size, image (link)


    console.log(`IMAGE: ${product.image}`)
    return(
        <>
            <ProductCartCard>
                <ProductImage src={product.image}/>
                <ProductName>{formatTitle(product.track)}</ProductName>
                <ProductQtyControl product={product} changeQty={changeQty}/>
                {/* <ProductDelete product={product}/> */}
            </ProductCartCard>
        </>
    )
}

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
    changeQty: PropTypes.func.isRequired,
};

const ProductCartCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    background-color: #1c1c1c;
    border-radius: 10px;
    padding: .3rem;
`;
const ProductImage = styled.div`
    background-image: url(${props => props.src});
    background-size: 300% 300%;  // This will ensure the image covers the entire div
    background-position: 50% 40%;  // This will center the image
    height: 40px;
    width: 50px;
    border-radius: 10px;
`;
const ProductName = styled.div`
    font-size: 1em;
    font-weight: 600;
    color: #ababab;
`;


function formatTitle(title){
    // Replace underscores with spaces
    title = title.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default CartCard;