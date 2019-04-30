import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ItemImage from './itemImage';
import ItemHeader from './itemHeader';
import ItemDescription from './itemDescription';
import ItemPrice from './itemPrice';
import ItemCategory from './itemCategory';
import ItemSeller from './itemSeller';


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
const StyledLink = styled(Link)`
    text-decoratin: none;
    color: black;
    
    &:hover{
        text-decoration: none;
    }
`


class AnnouncementItem extends Component {
    state = {id: this.props.id}
    
    render(){
        const {id} = this.props;
        return (
            <StyledLink to={`/item/${id}`}><Item>
                <ItemImg><ItemImage imgSrc={this.props.imgSrc}/></ItemImg>
                <ItemContent>
                <ItemHeader header={this.props.header}/>
                    <ItemDescription description={this.props.description}/>
                    <ItemPrice price={this.props.price}/>
                    <ItemCategory category={this.props.category}/>
                    <ItemSeller seller={this.props.seller}/>
                </ItemContent>
            </Item></StyledLink>
            
        );
    }
};
export default AnnouncementItem;