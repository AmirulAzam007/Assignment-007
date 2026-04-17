import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import useHooks from '../../hooks/useHooks';
import { HashLoader } from 'react-spinners';
import { MdAddIcCall } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';

const Timeline = () => {

    const  {calls, setCalls}  = useContext(TimelineContext);
    console.log(calls);

    const {friends, loading} = useHooks();

    if (loading) {
        return <div className='flex justify-center items-center p-10'><HashLoader  /></div>
    }

    return (
       <div className='space-y-3 h-screen pt-5 pb-3'>

  {calls.length === 0 ? (
    <h2 className="font-bold text-4xl text-center my-5">
      No Timeline data found!
    </h2>
  ) : (
    <>
      <h2 className='text-2xl text-green-800 max-w-[1300px] mx-auto'>Timeline</h2>

      {calls.map((call, ind) => {
        return (
          <div key={ind} className='max-w-[1300px] mx-auto p-2 bg-base-200 py-2 flex items-center gap-3 rounded-xl'>
            <div className='tex-xl'>
              {call.type === "call" && <MdAddIcCall />}
              {call.type === "text" && <BsChatLeftText />}
              {call.type === "video" && <FaVideo />}
            </div>

            <div>
              <h2 className='text-gray-500'><span className='text-green-800'>{call.type}</span> with {call.name}</h2>
              <p>{new Date(call.time).toLocaleString()}</p>
            </div>
          </div>
        );
      })}
    </>
  )}

</div>
    );
};

export default Timeline;