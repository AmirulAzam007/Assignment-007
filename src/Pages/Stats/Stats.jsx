import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {

    const data = [
        {name: "Call", value: 400, fill: "#0088FE"},
        {name: "Text", value: 300, fill: "#FFBB28"},
        {name: "Video", value: 200, fill: "#FF8042"},
    ]
    return (
        <div>

            <h1></h1>
            <div>
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
    );
};

export default Stats;