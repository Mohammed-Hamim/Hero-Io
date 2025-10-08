import React from 'react';

const Footer = () => {
    return (
        <footer className="footer container mx-auto footer-horizontal footer-center bg-[#001931]  text-white  p-10">
            <nav className="grid grid-flow-col  gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
           </nav>
            
                 
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero.Io </p>
            </aside>
        </footer>
    );
};

export default Footer;