import React from 'react';
import useUsersData from '../../hooks/Users/Users';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import './Home.css'
 
const Home = () => {
    const[users,setUsers] = useUsersData();

    return (
       
        <div className='container'>
         <div className='home-container' >
           <div className='laptop-details'>
              <h3>LENOVO IDEAPAD 320 </h3>
              <p>Everything about the Ideapad 320 is designed to simplify your 
                life. It will handle any task with ease,
                 thanks to powerful processing and discrete graphics options.</p>
                 <button className='demo-btn'> Live Demo </button>
           </div>           
           <div  className='laptop-images'>
            <img src='images/lenovo-ideapad-320.jpg' alt='' />
           </div>



            
        </div>
        <h1>See the Reviews!</h1>
        <div className='review-container'>
            {
               users.slice(0,3).map(user=><Review 
                key={user._id}
               user={user}>    
               </Review>) 
            } 
        </div>
    <Link to="/reviews" className='see-more-btn'>See More Reviews</Link>
    </div>
       
      
    );
};

 
export default Home;