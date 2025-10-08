import React from 'react';
import { useParams } from 'react-router';
import useAppData from '../../Hooks/useAppData';
import downloadImg from '../../assets/icon-downloads.png'
import reviewImg from '../../assets/icon-review.png'
import ratingImg from '../../assets/icon-ratings.png'

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useAppData()
    const clickedApp = apps.find(app => app.id === Number(id))
    if (loading) return <p>Loading.....</p>
    const { image, title, companyName, description, ratings, ratingAvg, downloads, reviews } = clickedApp;

    return (
        <div className=''>
            <div className='flex gap-8 flex-col md:flex-row p-5'>
                <div className=''>
                    <img className=' h-[350px] w-[350px]' src={image} alt="" />
                </div>
                <div className='flex flex-col flex-1 gap-5'>
                    <h2 className='text-[#001931] text-3xl font-bold'>{title}</h2>
                    <h3 className='text-xl text-gray-600'>Developed By: <span className='text-fuchsia-800'>{companyName}</span></h3>
                    <div className="divider"></div>

                    <div className='flex gap-4 md:gap-10    '>
                        <div className='flex flex-col gap-3'>
                            <div><img src={downloadImg} alt="" /></div>
                            <p className='text-gray-500'>Downloads</p>
                            <h2 className='text-[40px] font-bold'>{downloads}M</h2>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>  <img src={ratingImg} alt="" /></div>
                            <p className='text-gray-500'>Average Rating</p>
                            <h2 className='text-[40px] font-bold'>{ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <img src={reviewImg} alt="" />
                            </div>
                            <p className='text-gray-500'>Reviews</p>
                            <h2 className='text-[40px] font-bold'>{reviews}K</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;