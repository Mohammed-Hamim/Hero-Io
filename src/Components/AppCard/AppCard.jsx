import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const { name, id, image, downloads, ratingAvg } = app;

    return (
        <Link to={`/appDetails/${id}`}>
            <div className='bg-white flex flex-col gap-4 rounded-sm shadow-md p-4'>
                <div className='border-1 border-gray-400 p-3 bg-gray-300 rounded-sm'>
                    <img className='h-[230px]   w-full rounded-sm' src={image} alt="" />
                </div>
                <h2 className='text-xl capitalize font-bold'>  {name}</h2>
                <div className='flex justify-between items-center'>
                    <span className='flex rounded-sm items-center gap-2 bg-green-100 p-2 font-bold text-green-600'><MdOutlineFileDownload />{downloads}M</span>
                    <span className='flex rounded-sm items-center p-2 gap-2 text-orange-600 font-bold bg-orange-100'> {ratingAvg}<FaStar /></span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;