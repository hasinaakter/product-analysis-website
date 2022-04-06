import React from 'react';
import './Review.css'
const Review = (props) => {
    // console.log(props);
 const {name,image,rating,review} = props.user;
// const [users, setUsers] = useUsersData();

    return  (
<div className='review-container'>
 <div className='review'>
 <div>
      <img src={image} height='250' width='300' alt=" "/>
 </div>
 <div>
      <h3>Name:{name}</h3>
      <p>Review: {review}</p>
      <p>Rating: {rating}</p>
 </div>
 </div>
</div>
        );
};

export default Review;