import React from 'react';
import useAppData from '../Hooks/useAppData';
import AppCard from '../Components/AppCard/AppCard';

const Apps = () => {
    const { apps } = useAppData()


    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-4xl'>Our Applications</h2>
                <p className='text-center my-4 text-xl font-semibold text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='my-12'>
                <div className='flex flex-col my-6 gap-4 md:flex-row justify-between items-center'>
                    <h3 className='font-bold text-3xl'>({apps.length}) Apps Found</h3>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        apps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;