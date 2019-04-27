import React from 'react';
import styled from 'styled-components';

import ItemImage from './itemImage';
import ItemHeader from './itemHeader';
import ItemDescription from './itemDescription';
import ItemPrice from './itemPrice';


const Item = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 20px;
    margin: 10px;
    width: 100%-20px;
    min-width: 630px;
`
const ItemImg = styled.div`
    padding: 5px;
    width: 150px;
    border: 3px solid gray;
`
const ItemContent = styled.div`
    margin-left: 20px;
    text-align: left;
`

const AnnouncementItem = (props) => {
    return (
        <Item>
            <ItemImg><ItemImage imgSrc={props.imgSrc}/></ItemImg>
            <ItemContent>
                <ItemHeader header={props.header}/>
                <ItemDescription description={props.description}/>
                <ItemPrice price={props.price}/>
            </ItemContent>
        </Item>
    );
};
export default AnnouncementItem;