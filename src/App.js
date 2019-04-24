import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import Sidebar from './components/screenComponents/sidebar/Sidebar'

import './App.css';

class ShopApp extends Component {
  state = {
    userName: '',
    userId: '',
    currentCategory: 'wszystkie',

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
  onGetCategory(category){
    this.setState({currentCategory: category});
    
  }
  componentDidUpdate(){
    console.log(this.state.currentCategory);
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

        </div>
        <main>
            <div className="sidebar">
              <Sidebar getCategory={this.onGetCategory.bind(this)}/>
            </div>
            <div className="content">
              <HomeScreen/>
            </div>
          </main>
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
