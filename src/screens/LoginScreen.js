import React, { Component } from 'react';
import Logo from '../components/screenComponents/topbar/logo';
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

export default class LoginScreen extends Component{

    state = {
        userName: '',
        password: ''
    }

    onChangeUsername = (event) => {
        this.setState({userName: event.target.value});
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    onHandleSubmit = () => {
        console.log(this.state.userName);
        console.log(this.state.password);
    }

    render(){
        return(
            <div>
                <Logo/>
                <h1>Login Screen</h1>
                <Container>
                    <form className='main-form'>
                        <div className='form-group'>
                            <label htmlFor='username'>Nazwa użytkownika</label>
                            <input type='text' name='username' className='form-control' value={this.state.userName} onChange={this.onChangeUsername}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='userpassword'>Hasło</label>
                            <input type='password' name='userpassword' className='form-control' value={this.state.userPassword} onChange={this.onChangePassword}/>
                        </div>
                    </form>
                    <button className='btn btn-primary' onClick={this.onHandleSubmit}>Zaloguj</button>
                </Container>
            </div>
        );
    }
}