
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { products, sizes, colors } from './products';
import { getTrackInfo, getImage, getDescription } from "../productInfo"
import ColorBar from './ColorBar';
import AddToCartButton from './AddToCartButton';
import loadGif from '../assets/mclarenLoading.gif'
import Price from './Price';
import { useEffect, useState } from 'react';

function ProductCard({track, size, color}){
    // fetch image and description
    const [{dispColor, img, desc, price}, changeInfo] = useState({
        dispColor:"red",
        img:"",
        desc:getDescription(track),
        price:125,
    })
    const [loading, toggleLoading] = useState(false)

    async function changeImage(color){
        toggleLoading(true);  // Start loading
        const newImage = await getImage(track, color);
        changeInfo({
            dispColor: color,
            img: newImage,
            desc: desc,
            price: price,
        });
        toggleLoading(false);
    }
    useEffect(() => {
        getTrackInfo(track, size, color)
            .then((trackInfo) => {
                changeInfo(trackInfo);
            })
            .catch(error => {
                console.error("Failed to fetch track info:", error);
                // Handle the error appropriately, e.g., set an error state or show a notification
            });
    }, [track, size, color]);
    
    return(
        <CardContainer>
            <ImageWrapper>
                {loading && <LoadingGifContainer src={loadGif} />}
                <ImageContainer src={img} onLoad={() => toggleLoading(false)} />
            </ImageWrapper>
            <TitleContainer>{formatTitle(track)}</TitleContainer>
            <DescContainer>{desc}</DescContainer>
            <ColorBar changeImage={changeImage}/>
            <OptionsContainer>
                <Price price={price}/>
                <AddToCartButton 
                    color={dispColor}
                    track={track}
                    size={size}
                    img={img}
                />
            </OptionsContainer>
        </CardContainer>
    )
}

function formatTitle(title){
    // Replace underscores with spaces
    title = title.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

ProductCard.propTypes = {
    track: PropTypes.oneOf(products).isRequired,
    size: PropTypes.oneOf(sizes).isRequired,
    color: PropTypes.oneOf(colors).isRequired,
};

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #1f1f1f;
    padding: 20px;
    border-radius: 20px;
    width: 300px;
    gap: 10px;
    


    &:hover {
        cursor: pointer;
    }
`;
const ImageContainer = styled.img`
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    border-radius: 10px;
`;
// const ImageContainer = styled.div`
//     width: 300px;
//     height: 300px;
//     background-color: #444444;
//     border-radius: 10px;
// `;
const DescContainer = styled.span`
    color: #cccccc;
    flex: 1;
`;
const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between
`;
const TitleContainer = styled.span`
    font-size:20px;
    font-weight:800;
`;
const LoadingGifContainer = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 10px;
    z-index: 1;

`
const ImageWrapper = styled.div`
    position: relative;
    width: 300px;
    height: auto;
    /* height: 300px;  // Assuming the image height is 300px, adjust as needed */
`;

export default ProductCard