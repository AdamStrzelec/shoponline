import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`

const ItemHeader = (props) => {
    return(
        <div>
            <H3>tytuł: {props.header}</H3>
        </div>
    );
};
export default ItemHeader