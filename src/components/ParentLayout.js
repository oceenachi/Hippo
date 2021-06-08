import React from 'react';
import Styled from "styled-components"
import ProgressStep from './ProgressStep';

const ParentLayout = () => {
    return (
        <Wrapper className="wrapper">
            <nav className="parent-navbar">
                <div className="nav-img">
                    <img src="./images/payhippo.png" alt="Hippo logo"/>
                </div>
            </nav>
                <ProgressStep className="mid-section"/>


            
            <footer>
                <p className="footer-text">© 2021 payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved.</p>
            </footer>

        </Wrapper>
    )
}


const Wrapper = Styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;


.parent-navbar{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.nav-img{
    width: 10%;
    margin: 0 auto;
}
.mid-section{
    border: 2px solid red;
}
footer{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
        width: 60%;
        
    }
}
@media only screen and (max-width:770px){
 
 .nav-img {
    width: 20%;
    margin: 0 auto;
    }

    .footer-text{
        margin-top: 5rem;
    }
}
@media only screen and (max-width:420px){
 
 .nav-img {
    width: 30%;
    margin: 0 auto;
    }

}

`;
export default ParentLayout
