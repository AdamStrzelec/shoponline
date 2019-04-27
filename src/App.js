import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import Sidebar from './components/screenComponents/sidebar/Sidebar'
import Topbar from './components/screenComponents/topbar';

import './App.css';

class ShopApp extends Component {
  state = {
    userName: 'Adam',
    userId: '',
    currentCategory: 'wszystkie',
    searchInfo: '',
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
  onGetSearchInfo(searchInfo){
    this.setState({searchInfo});
  }
  componentDidUpdate(){
    console.log(this.state.currentCategory);
    console.log(this.state.searchInfo);
  }
  render(){

    return(
      <div>
        <Topbar getSearchInfo={this.onGetSearchInfo.bind(this)} userName={this.state.userName}/>
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
