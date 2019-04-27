import React from 'react';
import styled from 'styled-components';

const ItemDescription = (props) => {
    return(
        <div>
            <p>opis: {props.description}</p>
        </div>
    );
};
export default ItemDescription