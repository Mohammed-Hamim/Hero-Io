import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#001931] text-white  p-10">
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-4xl'>Hero.Io</h2>
                    <nav className="grid grid-flow-col  gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
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