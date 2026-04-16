import React from 'react';
import { useParams } from 'react-router';
import useHooks from '../../hooks/useHooks';
import { HashLoader } from 'react-spinners';
import { FaBell, FaVideo } from 'react-icons/fa';
import { FaBoxArchive } from 'react-icons/fa6';
import { MdAddIcCall, MdDelete } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';

const FriendDetails = () => {

    const colors = (item) => {
        if(item==="overdue"){
            return "bg-red-500";
        }
        else if(item==="almost due"){
            return "bg-yellow-500";
        }
        else if(item==="on-track"){
            return "bg-green-800";
        }
    }

    const {id} = useParams();

    const {friends, loading} = useHooks();

    
    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    if (loading) {
        return <div className='flex justify-center items-center p-10'><HashLoader  /></div>
    }


    return (
        <div className=' mx-auto bg-base-200 pt-15 pb-15'>

            <div className='lg:w-[50%] md:w-[70%] sm:w-[80%] mx-auto flex gap-12 sm:gap-2 mx-auto'>

                <div className='left-side'>
                    <div className="card bg-base-100 w-70 shadow-sm">
                          <figure className="px-10 pt-10">
                          <img
                            src={expectedFriend.picture}
                            className="rounded-full" />
                          </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">{expectedFriend.name}</h2>
                     <p className='text-gray-500'>{expectedFriend.days_since_contact}d ago</p>

                     <div className='bg-green-200 rounded-2xl px-2'>{expectedFriend.tags}</div>
                     <div className={`${colors(expectedFriend.status)} text-white rounded-2xl px-2 py-1`}>{expectedFriend.status}</div>
                     <p className='text-sm text-gray-500 font-style: italic'>"{expectedFriend.bio}"</p>
                     <p className='text-sm text-gray-500'>Preferred: email</p>

                    </div>
                </div>

                <div className='space-y-2 pt-2'>
                    <button className='flex justify-center items-center gap-2 bg-white p-2 w-70 rounded-xl'><FaBell />Snooze 2 weeks</button>
                    <button className='flex justify-center items-center gap-2 bg-white p-2 w-70 rounded-xl'> <FaBoxArchive />Archive</button>
                    <button className='flex justify-center items-center gap-2 bg-white p-2 w-70 rounded-xl text-red-500'> <MdDelete />Delete</button>
                </div>

                </div>

                <div className='right-side mx-auto space-y-5'>

                    <div className='rightt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto justify-center items-center mx-auto'>
                        <div className='bg-white space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center px-5 w-full'>
                            <p className='text-green-800 font-bold text-5xl'>{expectedFriend.days_since_contact}</p>
                            <p className=' text-gray-500'>Days Since Contact</p>
                        </div>
                        <div className='bg-white space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center px-5 w-full'>
                            <p className='text-green-800 font-bold text-5xl'>{expectedFriend.goal}</p>
                            <p className=' text-gray-500'>Goal (Days)</p>
                        </div>
                        <div className='bg-white space-y-5 w-full min-h-[20vh] flex flex-col justify-center items-center px-5 w-full'>
                            <p className='text-green-800 font-bold text-3xl'>{expectedFriend.next_due_date}</p>
                            <p className=' text-gray-500'>Next Due</p>
                        </div>
                    </div>

                    <div className='rightt-2 flex justify-between bg-white p-3 items-center rounded-xl'>

                        <div className='space-y-3'>
                            <p className='text-green-800 font-bold text-l'>Relationship Goal</p>
                            <p className='text-gray-500'>Connect every <span className='font-bold text-black'>{expectedFriend.goal} days</span></p>
                        </div>

                        <button className='btn'>Edit</button>
                    </div>

                    <div className='rightt-3 bg-white p-5 space-y-3'>

                        <p>Quick Check-In</p>

                        <div className='flex gap-3 justify-around'>
                            <button className='flex flex-col btn bg-base-200'><MdAddIcCall />Call</button>
                            <button className='btn bg-base-200 p-2'><BsChatLeftText />Text</button>
                            <button className='btn bg-base-200 p-2'><FaVideo />Video</button>
                        </div>
                    </div>

                </div>


            </div>
              

          

            
        </div>
    );
};

export default FriendDetails;