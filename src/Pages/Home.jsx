import React from 'react';
import Banner from '../Components/Banner/Banner';
import useAppData from '../Hooks/useAppData';
import AppCard from '../Components/AppCard/AppCard';
import { Link } from 'react-router';
import logoImg from '.././assets/logo.png'

const Home = () => {
    const { apps, loading } = useAppData()
    if (loading) {
        // return <div className="flex items-center justify-center gap-2 ">
        //     <div className='animate-spin'>
        //         <img className='h-15' src={logoImg} alt="" />
        //     </div>
        //     <p className='text-center text-gray-500 text-3xl font-semibold'>
        //         Loading...
        //     </p>
        // </div>
    }
    const trendingApps = apps.slice(0, 8)

    return (
        <div className=' '>
            <Banner></Banner>

            <div className='flex my-6 items-center justify-center gap-3 flex-col p-4'>
                <h2 className='text-4xl font-bold'>Trending Apps</h2>
                <p className='text-gray-600 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {
                    loading ? <div className="flex items-center justify-center gap-2 ">
                        <div className='animate-spin'>
                            <img className='h-15' src={logoImg} alt="" />
                        </div>
                        <p className='text-center text-gray-500 text-3xl font-semibold'>
                            Loading...
                        </p>
                    </div> :

                        <div className='grid container mx-auto grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                trendingApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                            }

                        </div>


                }
            </div>
            <div className='flex items-center justify-center my-4'>
                <Link to='/apps' className='btn text-white bg-green-300 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;