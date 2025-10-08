import React from 'react';
import AppErrImg from "../../assets/App-Error.png"
import {   useNavigate } from 'react-router';

const AppNotFound = () => {
    const Navigate = useNavigate()
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src={AppErrImg} alt="" />
                <h3 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h3>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={()=>Navigate(-3)} className='btn bg-blue-800 text-white'>Go Back</button>
            </div>
        </div>
    );
};

export default AppNotFound;