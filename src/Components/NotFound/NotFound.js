import React from 'react';
import Notfound from '../../Assests/Images/404.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <img src={Notfound} alt="" className='notfound-img'/>
        </div>
    );
};

export default NotFound;