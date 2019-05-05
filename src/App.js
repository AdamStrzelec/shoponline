import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import Sidebar from './components/screenComponents/sidebar/Sidebar'
import Topbar from './components/screenComponents/topbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import AnnouncementItem from './components/announcementItem';

class ShopApp extends Component {
  state = {
    userName: 'Adam',
    userId: '',
    searchInfo: '',
    currentCategory: ''
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

  display(){
    if(this.props.location.pathname==='/'){
      return(
        <HomeScreen/>
      );
    }else{
      return(
        <AnnouncementScreen/>
      );
    }
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
    <div>
      <div className="App">
        <Router>
          <Route exact path='/' component={ShopApp}/>        
          <Route path='/category/:categoryName' component={ShopApp}/>
          <Route path='/find/:itemName' component={ShopApp}/>
          <Route path='/item/:itemId' component={AnnouncementScreen}/>
          <Route path='/login' component={LoginScreen}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
