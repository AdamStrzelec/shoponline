import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SidebarItem from './sidebarItem';

import electronicsIcon from '../../../images/elektronika.PNG';
import fashionIcon from '../../../images/moda.PNG';
import homeIcon from '../../../images/dom.PNG';
import sportIcon from '../../../images/sport.PNG';
import automotiveIcon from '../../../images/motoryzacja.PNG';

const SideBar = styled.div`
    font-family: 'Lato', sans-serif;
    
`

const Ul = styled.ul`
    list-style: none;
    padding-left: 10px;
`
const H2 = styled.h2`
    padding-left: 30px;
    width: 17px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover{
        text-decoration: none;
    }
`

export default class Sidebar extends Component{

    onChangeCategory(category){
        this.props.getCategory(category);
    }

    render(){
        return(
            <SideBar>
                <H2>Kategorie</H2>
                <Ul>
                    <StyledLink to='/category/wszystkie'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} category='Wszystkie'/></li></StyledLink>
                    <StyledLink to='/category/elektronika'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={electronicsIcon} category='Elektronika'/></li></StyledLink>
                    <StyledLink to='/category/moda'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={fashionIcon} category='Moda'/></li></StyledLink>
                    <StyledLink to='/category/domiogrod'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={homeIcon} category='Dom i ogród'/></li></StyledLink>
                    <StyledLink to='/category/sport'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={sportIcon} category='Sport'/></li></StyledLink>
                    <StyledLink to='/category/motoryzacja'><li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={automotiveIcon} category='Motoryzacja'/></li></StyledLink>
                </Ul>
            </SideBar>
        );
    }
}