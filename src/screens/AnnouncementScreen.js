import React, { Component } from 'react';
import TopBar from '../components/screenComponents/topbar';

export default class AnnouncementScreen extends Component{

    componentDidMount(){
        // console.log(this.props.location.pathname);
    }
    render(){
        return(
            <div>
                <TopBar/>
                <h1>Announcement item</h1>
                <p>{this.props.match.params.itemId}</p>
            </div>
        );
    }
}
