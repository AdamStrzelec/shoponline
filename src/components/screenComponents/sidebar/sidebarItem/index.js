import React, { Component } from 'react';
import styled from 'styled-components';


const Item = styled.div`
    background: white;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        background-color: rgb(245, 245, 245);
    }
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    padding-right: 10px;
`

export default class SidebarItem extends Component{

    displayItem(){
        if(this.props.imgSrc!==undefined){
            return(
                <Img src={this.props.imgSrc} alt="item icon"/>    
            );
        }
    }

    onChangeCategory(){
        this.props.changeCategory(this.props.category);
    }

    render(){
        return(
            <Item onClick={this.onChangeCategory.bind(this)}>
                {this.displayItem()}
                <p>{this.props.category}</p>
            </Item>
        );
    }
}