import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="w-full min-h-screen bg-[#F7F7F7]">
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;