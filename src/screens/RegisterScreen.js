import React, { Component } from 'react';
import Logo from '../components/screenComponents/topbar/logo';
import styled from 'styled-components';


const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

export default class RegisterScreen extends Component{

    state = {
        userName: '',
        userMail: '',
        userPassword: '',
        repeatPassword: '',
    }

    onChangeUsername = (event) => {
        this.setState({userName: event.target.value});
    }
    onChangeMail = (event) => {
        this.setState({userMail: event.target.value});
    }
    onChangePassword = (event) =>{
        this.setState({userPassword: event.target.value});
    }
    onChangeRepeatPassword = (event) =>{
        this.setState({repeatPassword: event.target.value});
    }
    
    onHandleSubmit = () => {
        console.log(this.state.userName);
        console.log(this.state.userMail);
        console.log(this.state.userPassword);
        console.log(this.state.repeatPassword);
    }

    render(){
        return(
            <div>
                <Logo/>
                
                <h1>Utwórz konto</h1>
                
                <Container>
                    <form className='main-form'>
                        <div className='form-group'>
                            <label htmlFor='username'>Nazwa użytkownika</label>
                            <input type='text' name='username' className='form-control' value={this.state.userName} onChange={this.onChangeUsername}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='mail'>E-mail</label>
                            <input type='email' name='mail' className='form-control' value={this.state.userMail} onChange={this.onChangeMail}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='userpassword'>Hasło</label>
                            <input type='password' name='userpassword' className='form-control' value={this.state.userPassword} onChange={this.onChangePassword}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='repeatPassword'>Powtórz hasło</label>
                            <input type='password' name='repeatPassword' className='form-control' value={this.state.repeatPassword} onChange={this.onChangeRepeatPassword}/>
                        </div>

                        
                    </form>
                    <button className='btn btn-primary' onClick={this.onHandleSubmit}>Zatwierdź</button>
                </Container>
                
            </div>
        );
    }
}