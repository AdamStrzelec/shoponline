import React, { Component } from 'react';
import logo from '../../../images/logo.PNG';
import styled from 'styled-components';
import SearchBar from './searchBar';
import UserMenuBar from './userMenuBar';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    height: 100px;
    align-items: center;
    border: 1px solid red;
    padding: 10px;
`

const Img = styled.img`
    width: 300px;
`

const Search = styled.div`
    width: 50%;
`
const User = styled.div`
    width: 30%;
`

export default class TopBar extends Component {

    render(){
        return(
            <div>
                <Nav>
                    <Link to='/'><Img src={logo} alt="logo"/></Link>
                    <Search><SearchBar/></Search>
                    <User><UserMenuBar userName={this.props.userName}/></User>
                </Nav>
            </div>
        );
    }
}