import React, { useContext, useEffect, useState } from 'react';
import InStalledAppCard from '../Components/InstalledAppCard/InStalledAppCard';
import useAppData from '../Hooks/useAppData';
import { getInstalledApps, removeFromLocalStorage } from '../Utills/CustomFunction';
import { ToggleContext } from '../Layouts/MainLayout';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2'


const Installation = () => {
    const [toggle, setToggle] = useContext(ToggleContext)
    const { apps, loading } = useAppData()

    // const [sort, setSort] = useState('none')
    const [installedList, setInstallList] = useState([])
    const [defaultList, setDefaultList] = useState([])


    useEffect(() => {
        const inStalledApps = getInstalledApps() || []
        const installedAppsIds = inStalledApps.map(id => parseInt(id))

        if (inStalledApps) {
            const myInstalledList = apps.filter(app => installedAppsIds.includes(app.id))
            setInstallList(myInstalledList)
            setDefaultList(myInstalledList)
        }
    }, [apps])


    const handleRemove = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Delete this App!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonMargin:"40px",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {

                removeFromLocalStorage(id)
                const inStalledApps = getInstalledApps() || []


                const updateUi = installedList.filter(app => inStalledApps.includes(app.id))
                setInstallList(updateUi)

                setToggle(!toggle)

                Swal.fire({
                    title: "Deleted!",
                    text: "App has been deleted.",
                    icon: "success"
                });
            }
        });



    }



    //handle sorting 
    const handleSort = (type) => {
        // setSort(type)
        if (type === "ascending") {
            const sortedApp = [...installedList].sort((a, b) => a.size - b.size)
            setInstallList(sortedApp)
        }
        else if (type === "descending") {
            const sortedList = [...installedList].sort((a, b) => b.size - a.size)
            setInstallList(sortedList)
        } else {
            setInstallList(defaultList)
        }
    }
    return (

        <div className='p-4'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl'>Your Installed Apps</h2>
                <p className='text-gray-500 font-semibold mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex gap-4 flex-col md:flex-row justify-between items-center'>
                <h2 className='text-2xl font-bold'>({installedList.length})Apps Found</h2>
                <div className=''>
                    <select defaultValue="" className="select w-[250px]">
                        <option onClick={() => handleSort("none")}> Default</option>
                        <option onClick={() => handleSort("descending")} >High to Low</option>
                        <option onClick={() => handleSort("ascending")}>Low to High</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {
                    loading ? <LoadingSpinner></LoadingSpinner> :
                        <div className='flex flex-1 flex-col gap-4 my-4'>
                            {
                                installedList.map(app => <InStalledAppCard handleRemove={handleRemove} key={app.id} app={app}></InStalledAppCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Installation;