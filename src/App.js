import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import Sidebar from './components/screenComponents/sidebar/Sidebar'
import Topbar from './components/screenComponents/topbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
              {this.props.location.pathname === '/' ? <HomeScreen/> 
                : this.props.location.pathname.substr(0,9)==='/category' ? <HomeScreen cat={this.state.currentCategory}/> : <AnnouncementScreen/>}
            </div>
          </main>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      {/* <Route exact path='/' component={ShopApp}/>
      <Route exact path='/login' component={LoginScreen}/>
      <Route exact path='/item' component={AnnouncementScreen}/> */}
      <div className="App">
      {/* <Topbar getSearchInfo={this.onGetSearchInfo.bind(this)} userName={this.state.userName}/> */}
        <Router>
          <Route exact path='/' component={ShopApp}/>
          <Route path='/item/:itemId' component={ShopApp}/>
          <Route path='/category/:categoryName' component={ShopApp}/>
          <Route path='/login' component={LoginScreen}/>
        </Router>
        {/* <ShopApp /> */}
      </div>
    </div>
  );
}

export default App;
