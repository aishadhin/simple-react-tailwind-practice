import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                { open ? <XIcon></XIcon> : <MenuIcon></MenuIcon> }
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='mx-10'><a href="">Home</a></li>
                <li className='mx-10'><a href="">Services</a></li>
                <li className='mx-10'><a href="">About</a></li>
                <li className='mx-10'><a href="">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;