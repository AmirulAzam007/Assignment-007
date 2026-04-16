import React, { useEffect, useState } from 'react';

const useHooks = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();

            setFriends(data);
            setLoading(false);

        };
        fetchdata();
    }, []);
    return {friends, loading};
};

export default useHooks;