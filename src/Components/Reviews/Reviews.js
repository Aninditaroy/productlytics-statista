import React from 'react';
import { Card } from 'react-bootstrap';
import './Reviews.css';
const Reviews = ({ review }) => {
    const { review_details, image, full_name,rating } = review;
    return (
        <div>
            <Card className='review-container'> 
                <Card.Img className='card-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='card-title'>{full_name}</Card.Title>
                    <Card.Text>
                        {review_details}
                    </Card.Text>
                    <Card.Footer>
                        {rating}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviews;