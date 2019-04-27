import React from 'react';
import styled from 'styled-components';

const ItemHeader = (props) => {
    return(
        <div>
            <h3>tytuł: {props.header}</h3>
        </div>
    );
};
export default ItemHeader