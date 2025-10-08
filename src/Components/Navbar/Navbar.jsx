import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoLogoGithub, IoMdHome } from 'react-icons/io';
import { MdApps } from 'react-icons/md';
import { RiInstallFill } from 'react-icons/ri';

const Navbar = () => {
    return (
        <nav className="navbar container mx-auto  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className='py-2 px-4' to={'/'}>Home</NavLink>
                        <NavLink className='py-2 px-4' to={'/apps'}>Apps</NavLink>
                        <NavLink className='py-2 px-4' to={'/installation'}>Installation</NavLink>

                    </ul>
                </div>
                <img className='h-[60px]' src={logo} alt="" />
                <a className=" font-bold text-xl md:text-3xl ">HERO.IO</a>
            </div>

            <div className='navbar-center'>
                <ul className="menu menu-horizontal px-1  hidden lg:flex gap-5">
                    <NavLink className='py-2 flex gap-1 items-center justify-center px-4' to={'/'}><IoMdHome /> Home</NavLink>
                    <NavLink className='py-2 flex gap-1 justify-center items-center px-4' to={'/apps'}> <MdApps />Apps</NavLink>
                    <NavLink className='py-2 px-4 flex gap-1 justify-center items-center' to={'/installation'}><RiInstallFill /> Installation</NavLink>
                </ul>
            </div>

            <div className="navbar-end">
                <NavLink to={'https://github.com/Mohammed-Hamim'} className="btn text-white bg-green-300 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                    <IoLogoGithub />   Contribute</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;