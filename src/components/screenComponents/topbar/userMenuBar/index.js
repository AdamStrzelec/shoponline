import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserBar = styled.div`
    border: 1px solid black;
    min-width: 225px;
`
const Buttons = styled.div`
    margin: 5px;
`
const P = styled.p`
    margin: 2px;
`

export default class UserMenuBar extends Component{

    displayUserBar(){
        if(this.props.userName!==''){
            return(
            <UserBar>
                <P>Jesteś zalogowany jako:</P> 
                <P className='dropdown-toggle'>{this.props.userName} </P>  
            </UserBar>
            );
        }else{
            return(
            <UserBar>
                <Link to='/login'><Buttons><button className="btn btn-secondary">Zaloguj się</button></Buttons></Link>
                <Link to='/register'><Buttons><button className="btn btn-info">Utwórz konto</button></Buttons></Link>    
            </UserBar>
            );
        }
    }
    render(){
        return(
            <div>
                {this.displayUserBar()}
            </div>
        );
    }
}