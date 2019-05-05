import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Search = styled.div`
    border: 1px solid black;
    min-width: 430px;
    padding: 10px;
    display: flex;
    align-items: center;
`
const Form = styled.form`
    width: 100%;
    padding: 10px;
`

export default class SearchBar extends Component{

    state = {
        draft: '',
    }

    onChangeDraft = (event) => {
        this.setState({draft: event.target.value});
    }

    onChangeSearch(){
        this.props.getProductInfo(this.state.draft);
    }
    render(){
        return(
            <Search>
                <Form>
                    <input onChange={this.onChangeDraft} type="text" className="form-control" placeholder="Wyszukaj produkt"/>  
                </Form>
                <Link to={this.state.draft.length>0 ? '/find/'+this.state.draft : '/'}>
                    <button className="btn btn-primary">Szukaj</button>
                </Link>
            </Search>
        );
    }
}