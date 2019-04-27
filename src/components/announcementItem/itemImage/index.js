import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    // width: 100px;
    // border: 2px solid black;
    // box-sizing: border-box;
`

const Img = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
`

const ItemImage = (props) => {
    return(
        <Container>
            <Img src={props.imgSrc} alt="item image" />
        </Container>
    );
};
export default ItemImage