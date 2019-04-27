import React, { Component } from 'react';
import styled from 'styled-components';

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
                <button onClick={this.onChangeSearch.bind(this)} className="btn btn-primary">Szukaj</button>
            </Search>
        );
    }
}