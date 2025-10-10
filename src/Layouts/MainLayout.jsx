

import { Outlet, RouterContextProvider } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';



const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col '>
            <Header></Header>
            <div className='flex-1 container mx-auto my-6'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;