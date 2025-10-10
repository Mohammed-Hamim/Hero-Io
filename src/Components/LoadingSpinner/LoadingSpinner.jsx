import React from 'react';
import logoImg from '../../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2 ">
                <div className='animate-spin'>
                    <img className='h-10 w-10 ' src={logoImg} alt="" />
                </div>
                <p className='text-center text-gray-500 text-3xl font-semibold'>
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;