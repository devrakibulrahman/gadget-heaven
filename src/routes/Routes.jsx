import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
// import ShopNow from "../pages/ShopNow";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../components/categoriesComponents/AllProducts";
import Laptops from "../components/categoriesComponents/Laptops";
import Phone from "../components/categoriesComponents/Phone";
import Accessories from "../components/categoriesComponents/Accessories";
import SmartWatch from "../components/categoriesComponents/SmartWatch";
import Macbook from "../components/categoriesComponents/Macbook";
import Iphone from "../components/categoriesComponents/Iphone";
import AboutUs from "../pages/AboutUs";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllProducts></AllProducts>
                    },
                    {
                        path: '/laptops',
                        element: <Laptops></Laptops>
                    },
                    {
                        path: '/phones',
                        element: <Phone></Phone>
                    },
                    {
                        path: '/accessories',
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/smartwatches',
                        element: <SmartWatch></SmartWatch>
                    },
                    {
                        path: '/macbook',
                        element: <Macbook></Macbook>
                    },
                    {
                        path: '/iphone',
                        element: <Iphone></Iphone>
                    },
                ],
            },
            // {
            //     path: '/shop now',
            //     element: <ShopNow></ShopNow>,
            //     children: [
            //         {
            //             path: '/shop now',
            //             element: <AllProducts></AllProducts>
            //         },
            //         {
            //             path: '/shop now/laptops',
            //             element: <Laptops></Laptops>
            //         },
            //         {
            //             path: '/shop now/smartPhones',
            //             element: <Phone></Phone>
            //         },
            //         {
            //             path: '/shop now/smartWatches',
            //             element: <SmartWatch></SmartWatch>
            //         },
            //         {
            //             path: '/shop now/accessories',
            //             element: <Accessories></Accessories>
            //         },
            //     ],
            // },
            {
                path: '/about us',
                loader: () => fetch('/CompanyApi.json'),
                element: <AboutUs></AboutUs>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                loader: () => fetch('/allProductApi.json'),
                element: <Dashboard></Dashboard>
            },
            {
                path: '/Product details/:product_id',
                loader: () => fetch('/allProductApi.json'),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '*',
                element: <NotFoundPage></NotFoundPage>,
            },
        ],
    },
]);

export default router;