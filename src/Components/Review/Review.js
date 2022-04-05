import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-stars';

import './Review.css';
const Review = ({ review }) => {
    const { review_details, image, full_name, rating } = review;
    return (
        <>
            <Card className='review-container h-100'>
                <Card.Img className='card-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='card-title'>{full_name}</Card.Title>
                    <Card.Text className="review-details">
                        {review_details}
                    </Card.Text>
                    <Card.Footer className='border-0 d-flex justify-content-center align-items-center shadow-sm'>
                        <span className='rating'>Rating:</span><ReactStars 
                            value={rating}
                            size={30}
                            color2={'#ffd700'} edit={false}/>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
};

export default Review;