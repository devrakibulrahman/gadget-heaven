import { Outlet, useLocation } from 'react-router-dom';
import { LoadData } from '../../constants/ContextApi.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from '../components/Modal.jsx';
import { CartProvider } from '../../constants/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import { WishListProvider } from '../../constants/WishListContext.jsx';
import { PriceProvider } from '../../constants/PriceContext.jsx';
import { CartToWishlistSwitcherProvider } from '../../constants/CartAndWishlist.jsx';

const Root = () => {
    const routeLocation = useLocation();
    return (
        <>
        <WishListProvider>
            <CartProvider>
                <PriceProvider>
                    <CartToWishlistSwitcherProvider>
                        <Modal></Modal>
                        <div className="w-full min-h-screen bg-[#F7F7F7] flex items-center justify-center flex-col">
                            <Navbar></Navbar>
                            <div className={`w-full min-h-[calc(1080px_-_678px)] ${routeLocation.pathname === '/' || 'min-h-[calc(1080px_-_642px)]'}`}>
                                <LoadData>
                                    <Outlet />
                                </LoadData>
                            </div>
                            <Footer></Footer>
                        </div>
                    </CartToWishlistSwitcherProvider>
                </PriceProvider>
            </CartProvider>
            <ToastContainer/>
        </WishListProvider>
        </>
    );
};

export default Root;