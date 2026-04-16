import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { FaGithubSquare } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (

        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <img className='h-7 pl-3' src="/Images/logo.png" alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
         <NavLink to="/" className={({isActive}) => `${isActive ? "bg-green-900 text-white" : ""}`}>
         <IoMdHome />
         Home
         </NavLink>
    </li>
      <li>
        <NavLink to={"/Timeline"} className={({isActive}) => `${isActive ? "bg-green-950 text-white" : ""}`}><FiClock />Timeline</NavLink>
    </li>
      <li>
        <NavLink to={"/Stats"} className={({isActive}) => `${isActive ? "bg-green-950 text-white" : ""}`}><ImStatsDots />Stats</NavLink>
    </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;