import React from 'react';
import useUsersData from '../../hooks/Users/Users';
import Review from '../Review/Review';
import './Home.css'
 

const Home = () => {
    const[users,setUsers] = useUsersData();

    // const [cart, setCart] = useState([]);

    return (
       
        <div className='container'>
         <div className='home-container' >
           <div className='laptop-details'>
              <h3>LENOVO IDEAPAD 320 </h3>
              <p>Everything about the Ideapad 320 is designed to simplify your 
                life. It will handle any task with ease,
                 thanks to powerful processing and discrete graphics options.</p>
                 <button> Live Demo </button>
           </div>           
           <div  className='laptop-images'>
            <img src='images/lenovo-ideapad-320.jpg' alt='' />
           </div>



            
        </div>
        <h1>See the Reviews!</h1>
        <div className='review-container'>
           <h1>length:{users.length}</h1>
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

 
export default Home;