import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router';

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
         <Link to="/">
         <img src="/Images/Vector.png" alt="" />
         Home
         </Link>
    </li>
      <li>
        <Link to={"/Timeline"}><img src="/Images/Vector1.png" alt="" />Timeline</Link>
    </li>
      <li>
        <Link to={"/Stats"}><img src="/Images/ChartLine.png" alt="" />Stats</Link>
    </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;