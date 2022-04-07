import React from 'react';

const NotFound = () => {
    return (
        <div className='error'>
            <h3>OOOPS! Page Not Found.</h3>
            <p>Try Again Please!</p>
            <img src="./images/404error.jpg" height='450' alt=""/>
        </div>
    );
};

export default NotFound;