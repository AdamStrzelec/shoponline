import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../../../images/logo.PNG';


const Img = styled.img`
    width: 300px;
`

const Logo = (props) => {
    return(
        <div>
            <Link to='/'><Img src={logo} alt="logo"/></Link>
        </div>
    );
};
export default Logo