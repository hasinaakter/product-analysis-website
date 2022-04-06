import React from 'react';
import useUsersData from '../../hooks/Users/Users';
import Review from '../Review/Review';

const ShowUser = () => {
    const [users, setUsers] = useUsersData();
//  console.log(users);
    return (
        <div>
            {
                 users.map(user=><Review
                      key={user._id}
                   user={user}> 
                 </Review>) 
            }
        </div>
    );
};

export default ShowUser;