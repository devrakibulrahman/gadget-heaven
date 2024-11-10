import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                        path: '/:laptops',
                        // loader: () => fetch('/allProduct.json'),
                        element: <Laptops></Laptops>
                    },
                    {
                        path: '/:phones',
                        // loader: () => fetch('/allProduct.json'),
                        element: <Phone></Phone>
                    },
                    {
                        path: '/:accessories',
                        // loader: () => fetch('/allProduct.json'),
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/:smartwatch',
                        // loader: () => fetch('/allProduct.json'),
                        element: <SmartWatch></SmartWatch>
                    },
                    {
                        path: '/:macbook',
                        // loader: () => fetch('/allProduct.json'),
                        element: <Macbook></Macbook>
                    },
                    {
                        path: '/:iphone',
                        // loader: () => fetch('/allProduct.json'),
                        element: <Iphone></Iphone>
                    }
                ],
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/Product details/:productId',
                loader: () => fetch('/allProductApi.json'),
                element: <ProductDetails></ProductDetails>
            },
        ],
    },
]);

export default router;