import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useAppData from '../../Hooks/useAppData';
import downloadImg from '../../assets/icon-downloads.png';
import reviewImg from '../../assets/icon-review.png';
import ratingImg from '../../assets/icon-ratings.png';
import logoImg from '../../assets/logo.png'



import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToLocalStorage } from '../../Utills/CustomFunction';



const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useAppData()
    const [toggle, setToggle] = useState(false)// disable and enable state
    //loading 
    if (loading) {
        return <>
            <div className="flex items-center justify-center gap-2 ">
                <div className='animate-spin'>
                    <img className='h-15' src={logoImg} alt="" />
                </div>
                <p className='text-center text-gray-500 text-3xl font-semibold'>
                    Loading...
                </p>
            </div>
        </>
    }
    const clickedApp = apps.find(app => app.id === Number(id))

    const { image, title, size, companyName, description, ratings, ratingAvg, downloads, reviews } = clickedApp || {};

    const reversedRatings = [...ratings].sort((a, b) => b.count - a.count);
    //installation function
    const handleInstall = (id) => {
        addToLocalStorage(id)
         setToggle(false)
        // setToggle(true)

        // const prevInstalled = JSON.parse(localStorage.getItem('installedList')) || []
        // let updateList = [];
        // if (prevInstalled) {
        //     updateList = [...prevInstalled, clickedApp]
        // } else {
        //     updateList.push(clickedApp)
        // }
        // localStorage.setItem('installedList', JSON.stringify(updateList))
        // console.log(updateList)

        //     const prevInstalled = JSON.parse(localStorage.getItem('installedList')) || [];

        // prevent duplicate installs
        // const alreadyInstalled = prevInstalled.some(app => app.id === clickedApp.id);
        // if (!alreadyInstalled) {
        //     const updatedList = [...prevInstalled, clickedApp];
        //     localStorage.setItem('installedList', JSON.stringify(updatedList));


        // }


    }

    return (

        <div className='container mx-auto p-5'>
            <div className='flex  gap-8 flex-col md:flex-row  '>
                <div className='max-h-[350px]' >
                    <img className=' h-[350px] w-full md:w-[350px]' src={image} alt="" />
                </div>
                <div className='flex flex-col flex-1 max-h-[350px] gap-3'>
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
                    <button disabled={toggle ? true : false} onClick={() => handleInstall(id)} className='btn bg-gradient-to-r from-[#54CF68] to-[#00827A] max-w-[240px] text-white '>{toggle ? <span>Installed </span> : <span>Install Now ({size}MB)</span>}</button>
                </div>
            </div>

            <div className="divider"></div>
            <div className=' h-[400px] my-8'>
                <h2 className='font-bold text-2xl mb-2'>Ratings</h2>
                <ResponsiveContainer height="100%">
                    <ComposedChart layout="vertical"
                        data={reversedRatings}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis axisLine={false} tickLine={false} type="number" dataKey='count' />
                        <YAxis axisLine={false} tickLine={false} dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey={"count"} barSize={30} fill="#FF8811" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className="divider"></div>
            <div>
                <h2 className='text-2xl font-bold'>Description</h2>
                <div className='my-5'>
                    <p className='text-gray-900 text-justify'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;