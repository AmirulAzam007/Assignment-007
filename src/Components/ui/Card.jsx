import React from 'react';
import { Link } from 'react-router';

const Card = ({friend}) => {

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
    
    return (
        <Link to={`/Friends/${friend.id}`} className="card bg-base-100 w-70 shadow-sm">
                          <figure className="px-10 pt-10">
                          <img
                            src={friend.picture}
                            className="rounded-full" />
                          </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">{friend.name}</h2>
                     <p className='text-gray-500'>{friend.days_since_contact}d ago</p>

                     <div className='bg-green-200 rounded-2xl px-2'>{friend.tags}</div>
                     <div className={`${colors(friend.status)} text-white rounded-2xl px-2 py-1`}>{friend.status}</div>

                    </div>
                </Link>
    );
};

export default Card;