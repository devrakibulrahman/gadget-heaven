import 'remixicon/fonts/remixicon.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const pageLocation = useLocation();

    const handleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <div className={`relative w-full min-h-[20px] transition ${pageLocation.pathname === '/' ? 'md:pt-[30px] duration-300 ease-in-out' : 'md:pt-0 duration-300 ease-in-out'}`}>
            <div className={`w-full min-h-[10px] ${pageLocation.pathname === '/' ? 'px-[15px]' : 'px-0'}`}>
                <div className={`w-full max-w-[1920px] mx-auto min-h-[10px] ${pageLocation.pathname === '/' ? 'md:p-[8px] border-l border-r border-[#e0e0e0] md:border pl-[6px] pr-[6px] md:rounded-2xl' : 'md:p-0'}`}>
                    <div className={`w-full transition ${pageLocation.pathname === '/' ? 'bg-[#9538E2] duration-300 ease-in-out' : 'bg-none duration-300 ease-in-out'} md:rounded-2xl`}>
                        <div className="container mx-auto px-4">
                            <div className="w-full py-[25px] flex items-center justify-between md:py-[30px]">
                                <div className="w-auto">
                                    <h1 className={`font-sora text-xl leading-[25px] font-bold transition ${pageLocation.pathname === '/' ? 'text-white duration-300 ease-in-out' : 'text-[#0B0B0B] duration-300 ease-in-out'}`}>Gadget Heaven</h1>
                                </div>
                                <div className='w-auto hidden md:block'>
                                    <nav className='w-auto'>
                                        <ul className='w-auto flex items-center justify-center md:gap-x-[24px] lg:gap-x-[34px] xl:gap-x-[48px]'>
                                            <NavLink to='/' className={`font-sora text-base leading-[20px] ${pageLocation.pathname === '/' ? 'font-bold underline text-white' : (pageLocation.pathname === '/' || 'font-medium text-[#0B0B0BB3]')}`}>Home</NavLink>
                                            <NavLink to='/statistics' className={`font-sora text-base leading-[20px] ${pageLocation.pathname === '/statistics' ? 'font-bold underline text-[#9538E2]' : (pageLocation.pathname === '/' ? 'font-medium text-white' : 'font-medium text-[#0B0B0BB3]')}`}>Statistics</NavLink>
                                            <NavLink to='/dashboard' className={`font-sora text-base leading-[20px] ${pageLocation.pathname === '/dashboard' ? 'font-bold underline text-[#9538E2]' : (pageLocation.pathname === '/' ? 'font-medium text-white' : 'font-medium text-[#0B0B0BB3]')}`}>Dashboard</NavLink>
                                        </ul>
                                    </nav>
                                </div>
                                <div className='w-auto hidden md:flex md:items-center md:justify-center md:gap-x-4'>
                                    <div className='relative w-[40px] h-[40px] bg-[#9538E2] border border-[#dbdbdbb] rounded-full flex items-center justify-center cursor-pointer md:bg-[#ffffff] md:border-[#0B0B0B1A]'>
                                        <i className={`ri-shopping-cart-line text-xl text-white transition ${pageLocation.pathname === '/' ? 'md:text-[#9538E2] duration-300 ease-in-out' : 'md:text-[#0B0B0B] duration-300 ease-in-out'}`}></i>
                                        <div className={`w-[16px] h-[16px] bg-white rounded-full border absolute top-[-5px] right-[-3px] flex items-center justify-center transition ${pageLocation.pathname === '/' ? 'md:border-[#9538E8]' : 'md:border-[#0B0B0B1A]'}`}>
                                            <span className={`font-sora text-[10px] ${pageLocation.pathname === '/' ? 'text-[#9538E2] duration-300 ease-in-out' : 'text-[#0B0B0B] duration-300 ease-in-out'}`}>0</span>
                                        </div>
                                    </div>
                                    <div className='relative w-[40px] h-[40px] bg-[#9538E2] border border-[#dbdbdbb] rounded-full flex items-center justify-center cursor-pointer md:bg-[#ffffff] md:border-[#0B0B0B1A]'>
                                        <i className={`ri-heart-line text-xl text-white transition ${pageLocation.pathname === '/' ? 'md:text-[#9538E2] duration-300 ease-in-out' : 'md:text-[#0B0B0B] duration-300 ease-in-out'}`}></i>
                                        <div className={`w-[16px] h-[16px] bg-white rounded-full border absolute top-[-5px] right-[-3px] flex items-center justify-center ${pageLocation.pathname === '/' ? 'md:border-[#9538E8] duration-300 ease-in-out' : 'md:border-[#0B0B0B1A] duration-300 ease-in-out'}`}>
                                            <span className={`font-sora text-[10px] transition ${pageLocation.pathname === '/' ? 'text-[#9538E2] duration-300 ease-in-out' : 'text-[#0B0B0B] duration-300 ease-in-out'}`}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-auto md:hidden'>
                                    <div onClick={handleNav} className='w-[25px] h-[25px] flex items-center justify-end cursor-pointer'>
                                        <i className={`ri-menu-line text-2xl ${pageLocation.pathname === '/' ? 'text-white' : 'text-[#0B0B0B]'}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed ${isNavActive ? 'top-0 duration-300 ease-in-out' : 'top-[-100%] duration-300 ease-in-out'} left-0 w-full h-[500px] bg-white/70 backdrop-blur-md shadow-sm transition-all md:hidden`}>
                <div onClick={handleNav} className='w-[25px] h-[25px] bg-[#9538E2] flex items-center justify-center absolute top-[24px] right-[25px] cursor-pointer'>
                    <i className="ri-close-fill text-2xl text-white"></i>
                </div>
                <div className='w-full'>
                    <nav className='mt-[85px]'>
                        <ul className='flex flex-col'>
                            <NavLink to='/' className={`pl-[25px] py-5 border-b border-[#dbdbdb] text-base font-sora font-medium ${pageLocation.pathname === '/' ? 'text-[#9538E2]' : 'text-[#a1a1a1]'}`}>Home</NavLink>
                            <NavLink to='/statistics' className={`pl-[25px] py-5 border-b border-[#dbdbdb] text-base font-sora font-medium ${pageLocation.pathname === '/statistics' ? 'text-[#9538E2]' : 'text-[#a1a1a1]'}`}>Statistics</NavLink>
                            <NavLink to='/dashboard' className={`pl-[25px] py-5 border-b border-[#dbdbdb] text-base font-sora font-medium ${pageLocation.pathname === '/dashboard' ? 'text-[#9538E2]' : 'text-[#a1a1a1]'}`}>Dashboard</NavLink>
                        </ul>
                    </nav>
                    <div className='w-full flex items-center justify-center gap-x-3 mt-[70px]'>
                        <div className='relative w-[40px] h-[40px] bg-[#9538E2] border border-[#dbdbdbb] rounded-full flex items-center justify-center cursor-pointer md:bg-[#ffffff] md:border-[#0B0B0B1A]'>
                            <i className="ri-shopping-cart-line text-xl text-white md:text-[#9538E2]"></i>
                            <div className='w-[16px] h-[16px] bg-white rounded-full border absolute top-[-5px] right-[-3px] flex items-center justify-center md:border-[#9538E8]'>
                                <span className='font-sora text-[10px] text-[#9538E2]'>0</span>
                            </div>
                        </div>
                        <div className='relative w-[40px] h-[40px] bg-[#9538E2] border border-[#dbdbdbb] rounded-full flex items-center justify-center cursor-pointer md:bg-white md:border-[#0B0B0B1A]'>
                            <i className="ri-heart-line text-xl text-white md:text-[#9538E2]"></i>
                            <div className='w-[16px] h-[16px] bg-white rounded-full border absolute top-[-5px] right-[-3px] flex items-center justify-center md:border-[#9538E8]'>
                                <span className='font-sora text-[10px] text-[#9538E2]'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;