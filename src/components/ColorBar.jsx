import { colorCodes } from "./products"
import styled from 'styled-components';
import PropTypes from 'prop-types';


function ColorBar({ changeImage }){

    let colorCodesKeys = Object.keys(colorCodes);
    return(
        <ColorsContainer>
            {colorCodesKeys.map((color, index)=>{
                return <ColorContainer key={index} bgColor={colorCodes[color]} onClick={()=> changeImage(color)} />
            })}
        </ColorsContainer>
    )
}

const ColorContainer = styled.div`
    background-color: ${props => props.bgColor};
    height: 10px; // You can set your desired height
    flex: 1;
    transition: transform 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.15);  // 1.1 means it will scale 10% larger
    }
`;

const ColorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 15px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;

ColorBar.propTypes = {
    changeImage: PropTypes.func.isRequired,
};

export default ColorBar