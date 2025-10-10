import React from 'react';

import logoImg from '../../assets/logo.png'

const SearchSpinner = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2 ">
                <div className='animate-spin'>
                    <img className='h-15' src={logoImg} alt="" />
                </div>
                <p className='text-center text-gray-500 text-3xl font-semibold'>
                    Searching...
                </p>
            </div>
        </div>
    );
};

export default SearchSpinner;