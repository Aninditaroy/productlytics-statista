import React from 'react';
import AboutImg from '../../Assests/Images/about.png';
import './About.css';
const About = () => {
    return (
        <div>
            <h2 className='mt-5'>Thanks for visiting <span className='about-heading'>Productlytics Statista</span>🙂!</h2>
            <img src={AboutImg} alt="" className='about-img mt-0' />
        </div>
    );
};

export default About;