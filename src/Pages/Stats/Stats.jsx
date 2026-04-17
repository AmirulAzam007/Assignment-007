import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../context/TimelineContext';

const Stats = () => {

    const {calls} = useContext(TimelineContext);

const callCount = calls.filter(item => item.type === "call").length;
const textCount = calls.filter(item => item.type === "text").length;
const videoCount = calls.filter(item => item.type === "video").length;

    const data = [
        {name: "Call", value: callCount, fill: "#0088FE"},
        {name: "Text", value: textCount, fill: "#FFBB28"},
        {name: "Video", value: videoCount, fill: "#FF8042"},
    ]
    return (
        <div>
            <h1 className='mx-auto w-7/12 text-3xl font-bold mt-10'>Friendship Analytics</h1>
            <div className='space-y-3 mb-10 mt-2 rounded-xl  bg-base-200 mx-auto w-7/12 p-8'>

            <h1 className=' justify-start items-start text-xl text-green-800 font-bold'>By Interaction Type</h1>

            <div className='w-full h-[500px] flex flex-col justify-center  items-center'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>

            </div>

            

          

    
        </div>
        </div>
    );
};

export default Stats;