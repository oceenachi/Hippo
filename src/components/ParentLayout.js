import React from 'react';
import Styled from "styled-components"
import ProgressStep from './ProgressStep';

const ParentLayout = () => {
    return (
        <Wrapper className="wrapper">
            <nav className="parent-navbar">
                NAV BAR
            </nav>
                <ProgressStep className="mid-section"/>
            
            <footer>
                footer text
            </footer>

        </Wrapper>
    )
}


const Wrapper = Styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
/* position: relative; */

.parent-navbar{
    width: 100%;
    height: 70px;
    background: green;
}

.mid-section{
    border: 2px solid red;
}
footer{
    background: yellow;
    height: 50px;
}

`;
export default ParentLayout
