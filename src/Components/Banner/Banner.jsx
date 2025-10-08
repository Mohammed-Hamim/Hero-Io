import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { IoMdAppstore } from 'react-icons/io';
import { Link } from 'react-router';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='mx-auto container my-6'>
            <div className='flex flex-col items-center justify-center   gap-5 p-5'>
                <h1 className='md:text-[72px] text-center max-w-[597px] text-3xl text-[#001931] font-bold'>We Build <span className='text-[#632EE3]  '>Productive</span> Apps</h1>
                <p className='text-[#627382] text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-5   text-[#001931] font-bold'>
                    <Link to='https://play.google.com/store/apps?hl=en' className='flex gap-2 text-white bg-blue-700 btn'> <FaGooglePlay />Google Play</Link>
                    <Link to='https://www.apple.com/app-store/' className='flex gap-2 bg-blue-400 btn'> <IoMdAppstore /> App Store</Link>
                </div>
            </div>
            <div className='flex items-center px-4 justify-center'>
                <img src={heroImg} alt="" />
            </div>
            <div className='bg-linear-to-r px-4 py-8 flex flex-col items-center justify-center gap-6 from-[#632EE3] to-[#9F62F2]'>
                <div className=' '>
                    <h2 className='font-bold text-2xl text-center   md:text-[48px] text-white'>Trusted by Millions, Built for You</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center text-white'>
                    <div className='text-center '>
                        <p>Total Downloads</p>
                        <h2 className='font-bold text-3xl md:text-[64px]'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center '>
                        <p>Total Reviews</p>
                        <h2 className='font-bold text-3xl md:text-[64px]'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center '>
                        <p>Active Apps</p>
                        <h2 className='font-bold text-3xl md:text-[64px]'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;