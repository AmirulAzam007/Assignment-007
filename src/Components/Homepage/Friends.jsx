import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import { HashLoader } from 'react-spinners';
import useHooks from '../../hooks/useHooks';

const Friends = () => {

   const {friends, loading} = useHooks();

    return (
        <div className='grid justify-center items-center pt-10 pb-8 bg-base-200 mx-auto'>
            <h1 className='text-xl font-bold pb-2'>Your Friends</h1>
            
           {loading ? <div className='flex justify-center items-center p-10'><HashLoader  /></div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                {friends.map((friend, ind) => {
                return (<Card friend={friend} key={ind} />) 
            })}
            </div>}
        </div>
    );
};

export default Friends;