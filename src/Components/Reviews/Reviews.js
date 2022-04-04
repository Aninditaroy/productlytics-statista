import React from 'react';
import { Card } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import './Reviews.css';
const Reviews = ({ review }) => {
    const { review_details, image, full_name,rating } = review;
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
                        <span className='rating'>Rating: {rating}</span> <BsFillStarFill className='fill-star'/>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
};

export default Reviews;