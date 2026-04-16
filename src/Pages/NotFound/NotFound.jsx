import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
<div className='flex justify-center items-center'>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='font-bold text-xl'>404 - Page Not Found</h1>
      <p className='font-bold text-xl'>The page you're looking for doesn't exist.</p>
      <button className=' mt-3 btn bg-green-500 text-white'><Link to="/">Go back to Home</Link></button>
    </div>
            
 </div>
    );
};

export default NotFound;