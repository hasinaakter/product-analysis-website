import React from 'react';
import './Review.css'
import Home from '../Home/Home';
const Review = (props) => {
    // console.log(props.user);
    //  const {name,image,rating,review} = props.user;

    return (
        
        <div>
        <h2>Reviews here</h2>
    <div>
     <img src={ props.user.image} height='300' width='400' alt=""/>
     </div>
   <div>
   <h4>Name: { props.user.name}</h4>
  <p>Review:{ props.user.review}</p>
   <p>Rating: { props.user.rating}</p> 
   </div>
    </div>
    
    );
};

export default Review;