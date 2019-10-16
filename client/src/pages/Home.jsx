import React from 'react';
import {Container,Row,Col} from "../components/Grid"
import Nav from '../components/Nav';
import Sport from '../components/Sport'




const Home = () => {
    return(
        <Container>
        <Nav/>
            <Row>
                
                    <Sport/>
               
            </Row>
        </Container>
    )
}


export default Home;