import React from 'react';
import { FaFacebook, FaInstagram, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-800 w-full h-[35vh] mx-auto mb-0'>
            <div className='flex flex-col justify-center items-center space-y-3 pt-10'>
                <h1 className='text-4xl text-white font-bold'>KeenKeeper</h1>
                <p className='text-gray-300 text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-gray-300 text-sm'>Social Links</p>
                <div className='flex gap-2'>
                    <div className='bg-white p-2 rounded-full'><FaInstagram /></div>
                    <div className='bg-white p-2 rounded-full'><FaFacebook /></div>
                    <div className='bg-white p-2 rounded-full'><FaSquareXTwitter /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;