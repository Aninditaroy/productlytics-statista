import React from 'react';
import { Card } from 'react-bootstrap';
import './Reviews.css';
const Reviews = ({ review }) => {
    const { review_details, image, full_name } = review;
    return (
        <div>
            <Card>
                <Card.Img className='card-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{full_name}</Card.Title>
                    <Card.Text>
                        {review_details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviews;