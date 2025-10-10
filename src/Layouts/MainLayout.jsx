import React, { createContext, useState } from 'react';

import { Outlet, RouterContextProvider } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
export const ToggleContext = createContext()


const MainLayout = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='min-h-screen flex flex-col '>
            <Header></Header>
            <div className='flex-1 container mx-auto my-6'>
                <ToggleContext value={[toggle, setToggle]}>
                    <Outlet></Outlet>
                </ToggleContext>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;