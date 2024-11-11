import { Outlet, useLocation } from 'react-router-dom';
import { LoadData } from '../../constants/ContextApi.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { CartProvider } from '../../constants/CartContext.jsx';
import { DeleteCartProvider } from '../../constants/DeleteToCartContext.jsx';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const routeLocation = useLocation();
    return (
        <>
            <DeleteCartProvider>
                <CartProvider>
                    <div className="w-full min-h-screen bg-[#F7F7F7] flex items-center justify-center flex-col">
                        <Navbar></Navbar>
                        <div className={`w-full min-h-[calc(1080px_-_678px)] ${routeLocation.pathname === '/' || 'min-h-[calc(1080px_-_642px)]'}`}>
                            <LoadData>
                                <Outlet />
                            </LoadData>
                        </div>
                        <Footer></Footer>
                    </div>
                </CartProvider>
            </DeleteCartProvider>
            <ToastContainer/>
        </>
    );
};

export default Root;