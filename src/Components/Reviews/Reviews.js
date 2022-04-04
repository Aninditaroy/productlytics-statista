import React from 'react';
import Review from '../../Review/Review';
import useReviews from '../../Hooks/useReviews';
import './Reviews.css';
import { Container, Row } from 'react-bootstrap';
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <Container>
                <h2 className='review-heading'><span className='review'>What our customers say!</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4 h-100">
                    {
                        reviews.map(review => <Review review={review} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;