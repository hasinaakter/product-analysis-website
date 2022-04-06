import React from 'react';
import useUsersData from '../../hooks/Users/Users';
import Review from '../Review/Review';

const Reviews = () => {
    const[users,setUsers] = useUsersData();
    return (
        <div>
            <div className='review-container'>
           
           {
              users.map(user=><Review
              key={user._id}
              user={user}>    

              </Review>) 
           } 
       </div>
        </div>
    );
};

export default Reviews;