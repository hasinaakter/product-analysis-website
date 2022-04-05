import React from 'react';
import useUsersData from '../../hooks/Users/Users';
import Review from '../Review/Review';

const Home = () => {
    const[users,setUsers] = useUsersData();

    // const [cart, setCart] = useState([]);

    return (
        <div className='user-reviews'>
             {/* <h3>user: {users.length}</h3>  */}
             {
               users.map(user=><Review 
                key={user._id}
               user={user}>    
               </Review>) 
            } 
        </div>
        
    );
};

export default Home;