
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Components/AppDetails/AppDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading.....</p>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/apps',
                element: <Apps></Apps>

            },
            {
                path: '/installation',
                element: <Installation></Installation>
            },
            {
                path: '/appDetails/:id',
                element: <AppDetails></AppDetails>
            }
        ]
    },
]);