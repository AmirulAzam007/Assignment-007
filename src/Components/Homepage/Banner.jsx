import React from 'react';

const Banner = () => {
    return (
<div className='mx-auto'>
 <div className="hero bg-base-200 min-h-[10vh] pt-15 mx-auto">
  <div className="hero-content text-center">
    <div className="max-w-[95%] mx-auto">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
       Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
       relationships that matter most.
      </p>
      <button className="btn bg-green-900 text-white">+ Add a Friend</button>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 justify-center items-center mx-auto mt-10'>

       <div className='bg-white space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='text-4xl font-bold'>10</h1>
        <p className='text-gray-500'>Total Friends</p>
       </div>

       <div className='bg-white space-y-5  w-full min-h-[20vh] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='text-4xl font-bold'>3</h1>
        <p className='text-gray-500'>On Track</p>
       </div>

       <div className='bg-white space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='text-4xl font-bold'>6</h1>
        <p className='text-gray-500'>Need Attention</p>
       </div>

       <div className='bg-white p-10 px-25 space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='text-4xl font-bold'>12</h1>
        <p className='text-gray-500'>Interactions This Month</p>
       </div>


   </div>

</div>

  </div>

  

</div>

        </div>
    );
};

export default Banner;