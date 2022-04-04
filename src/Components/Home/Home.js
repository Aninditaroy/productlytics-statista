import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from "../../Assests/Images/product.png";
import './Home.css';
const Home = () => {
    return (
        <div>
            <Container fluid className='home-section d-flex justify-content-center'>
                <Row className='details-section' >
                    <Col sm={12} md={6} className="mt-5">
                        <h1 >Say Hello to Your next iMac</h1>
                        <h1 className='heading-color'>Fit perfectly into your life.</h1>
                        <p>iMac was designed to minimize its impact on the environment. All of the virgin wood fiber in its packaging comes exclusively from responsibly managed forests. The rare earth elements in the speakers, fan motor, and power connector magnets are completely recycled. And we're committed to transitioning our entire manufacturing supply chain to 100 percent renewable electricity by 2030.</p>
                    </Col> 
                    <Col sm={12} md={4}>
                        <img src={Product} alt="" className='product-img' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;