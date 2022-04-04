import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from "../../Assests/Images/product.png";
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const navigate = useNavigate();
    const [reviews] = useReviews();
    return (
        <div>
            <Container fluid className='home-section'>
                <Row className='details-section'>
                    <Col sm={12} md={6} className="mt-5">
                        <h1 >Say Hello to Your next iMac</h1>
                        <h1 className='heading-color'>Fit perfectly into your life.</h1>
                        <div className='ps-5 pe-5 m-3'>
                            <p className='fs-5'>iMac was designed to minimize its impact on the environment. All of the virgin wood fiber in its packaging comes exclusively from responsibly managed forests. The rare earth elements in the speakers, fan motor, and power connector magnets are completely recycled. And we're committed to transitioning our entire manufacturing supply chain to 100 percent renewable electricity by 2030.</p>
                        </div>
                        <button className='btn know-more-btn'><a target='_blank ' href="https://www.apple.com/imac-24/">Know More</a></button>
                    </Col>
                    <Col sm={12} md={4}>
                        <img src={Product} alt="" className='product-img' />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div>
                    <h1 className='mt-5 mb-5 pt-5 fw-bold'>Customer Reviews(3)</h1>
                    <Row xs={1} md={2} lg={3} className="g-4 h-100">
                        {
                            reviews.slice(0, 3).map((review, index) =>
                                <Review key={index}
                                    review={review} />)
                        }
                    </Row>
                    <button onClick={() => navigate('/reviews')} className='btn see-all-btn mt-4'>See All Reviews</button>
                </div>
            </Container>
        </div>
    );
};

export default Home;