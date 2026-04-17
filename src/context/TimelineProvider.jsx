import { useState } from "react";
import { TimelineContext } from "./TimelineContext";


const TimelineProvider = ({ children }) => {

    const [calls, setCalls] = useState([]);

    const data = {
        calls,
        setCalls,
    };

    return (
        <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
    );
};

export default TimelineProvider;