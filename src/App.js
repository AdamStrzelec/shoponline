import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import  RegisterScreen from './screens/RegisterScreen';
import  LoginScreen from './screens/LoginScreen';
import  AnnouncementScreen from './screens/AnnouncementScreen';

import './App.css';

class ShopApp extends Component {
  state = {
    userName: 'AdamS',
    userId: '',
    findItem: '',

  }
  menuUser(){
    
    if(this.state.userName!=='' && this.state.userId!==''){
      return(
      <div>
        {this.state.username}
      </div>
      );
    }else{
      return(
      <div>
        <button>Zaloguj się</button>
      </div>
      );
    }
    
  }
  render(){

    return(
      <div>
        <div className="topbar">
          <header>
            <div className="logo"><h1>Logo</h1></div>
            <div className="search">
              <input type="text" />
              <button>Szukaj</button>
            </div>
            <div className="menuUser">
              {this.menuUser()}
            </div>
          </header>
          <main>
            <HomeScreen/>
          </main>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ShopApp />
    </div>
  );
}

export default App;
