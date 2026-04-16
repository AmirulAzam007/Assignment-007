import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';

const Friends = () => {


    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();

            setFriends(data);

        };
        fetchdata();
    }, []);

    console.log(friends);
    return (
        <div className='grid justify-center items-center pt-10 bg-base-200 mx-auto'>
            <h1 className='text-xl font-bold pb-2'>Your Friends</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                {friends.map((friend, ind) => {
                return  <Card friend={friend} key={ind} />;
            })}
            </div>
        </div>
    );
};

export default Friends;