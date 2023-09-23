import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProductQtyControl({product, changeQty}){
    const handleUp = () => changeQty(product.track, 1, product.color);
    const handleDown = () => changeQty(product.track, -1, product.color);

    return(
        <QtyControlContainer>
            <QtyButton onClick={handleDown} qty={product.qty}><Text>-</Text></QtyButton>
            <ProductQty>
                <ProductQtyText>{product.qty}</ProductQtyText>
            </ProductQty>
            <QtyButton onClick={handleUp}>+</QtyButton>
        </QtyControlContainer>
    )
}

ProductQtyControl.propTypes = {
    product: PropTypes.object.isRequired,
    changeQty: PropTypes.func.isRequired,
};
const QtyControlContainer = styled.div`
    display: flex;

    width: 30%;
    height: 100%;
    gap: 4%
`;
const QtyButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${props => props.qty === 1 ? '#611b1b': '#222222'};
    width: 100%;
    border-radius: 6px;

    &:hover{
        cursor: pointer;
    }
`;
const Text = styled.div`
    color: #c0c0c0;
    font-weight: 700;
`;
const ProductQty = styled.div`
    flex: 1.5;
    background-color: #2f2f2f;
    border-radius: 8px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProductQtyText = styled.span`
    font-weight: 600;
    color: #7a7a7a;
`;


export default ProductQtyControl;