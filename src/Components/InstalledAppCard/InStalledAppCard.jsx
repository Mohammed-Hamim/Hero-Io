import { StarIcon } from 'lucide-react';
import React from 'react';


const InStalledAppCard = ({ app, handleRemove }) => {

    const { id, image, title, downloads, ratingAvg, size } = app;
    return (
        <div className='flex justify-between items-center bg-white rounded-sm p-2'>
            <div className='flex  justify-between items-center gap-5'>
                <div className='rounded-sm p-2 bg-gray-300'>
                    <img className='md:h-[100px] h-[50px] w-[50px] md:w-[100px]' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl font-bold'>{title}</h2>
                    <div className='flex justify-between mt-4 items-center gap-3 md:gap-6'>
                        <h2 className='text-[#00D390]'>{downloads}M</h2>
                        <h2 className='text-[#FF8811] flex gap-1 items-center'><StarIcon></StarIcon> {ratingAvg}</h2>
                        <p>{size}MB</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleRemove(id)} className='btn font-bold text-white bg-[#00D390]'>Uninstall</button>
        </div>
    );
};

export default InStalledAppCard;