import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" bg-[#001931] text-white  p-10">
            <div className='container mx-auto'>
                <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
                    <h2 className='font-bold text-4xl'>Hero.Io</h2>
                    <nav className="grid grid-flow-col  gap-4">
                        <Link to='/' className="link link-hover">Home</Link>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Privacy</a>
                    </nav>
                </div>
                <div className='divider divider-info'></div>
                <aside className='text-center'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero.Io </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;