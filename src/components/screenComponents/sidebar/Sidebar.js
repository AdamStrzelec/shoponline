import React, { Component } from 'react';

import styled from 'styled-components';

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

export default class Sidebar extends Component{

    onChangeCategory(category){
        this.props.getCategory(category);
    }

    render(){
        return(
            <SideBar>
                <h2>Kategorie</h2>
                <Ul>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} category='Wszystkie'/></li>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={electronicsIcon} category='Elektronika'/></li>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={fashionIcon} category='Moda'/></li>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={homeIcon} category='Dom i ogród'/></li>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={sportIcon} category='Sport'/></li>
                    <li><SidebarItem changeCategory={this.onChangeCategory.bind(this)} imgSrc={automotiveIcon} category='Motoryzacja'/></li>
                </Ul>
            </SideBar>
        );
    }
}