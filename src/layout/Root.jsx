import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Root = () => {
    const routeLocation = useLocation();
    return (
        <div className="w-full min-h-screen">
            <Navbar></Navbar>
            <div className={`w-full min-h-[365px] ${routeLocation.pathname === '/' || 'min-h-[413px]'}`}>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;