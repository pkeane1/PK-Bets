import React from 'react';
import {Container,Row,Col} from "../components/Grid"
import Nav from '../components/Nav';
import Sport from '../components/Sport'




const Home = () => {
    return(
        <Container>
        <Nav/>
            <Row>
                <Col size ='md-4'></Col>
                <Col size ='md-4'>
                    <Sport/>
                </Col>
                <Col size ='md-4'></Col>
            </Row>
        </Container>
    )
}


export default Home;