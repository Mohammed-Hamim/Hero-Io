import React from 'react';
import ErrorImg from '../assets/error-404.png'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex my-8 flex-col gap-4 justify-center items-center'>
                <div>
                    <img src={ErrorImg} alt="" />
                </div>
                <div className='flex flex-col mt-4 gap-2 justify-center items-center'>
                    <h2 className='text-3xl font-bold'>Oops, page not found!</h2>
                    <p>The page you are looking for is not available.</p>
                    <Link className='btn'>Go back</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;