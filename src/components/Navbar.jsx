import 'remixicon/fonts/remixicon.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
    // all hooks declaration ----------------------------------->
    const [isNavActive, setIsNavActive] = useState(false);
    const location = useLocation();

    // all destructure array and object ------------------------>
    const {pathname} = location;

    // all function declaration -------------------------------->
    const handleNavActive = () => {
        setIsNavActive(!isNavActive)
    };

    return (
        <div className={`w-full ${pathname === '/' && 'px-4 md:pt-[30px]'}`}>
            <div className={`w-full ${pathname === '/' && 'pl-[6px] pr-[6px] border-l border-r border-[#e2e2e2] md:border-t md:pt-[6px] md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-tl-3xl lg:rounded-tr-3xl'} `}>
                <div className={`w-full py-[30px] ${pathname === '/' ? 'bg-[#9538E2] md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-tl-3xl lg:rounded-tr-3xl' : 'bg-white'} relative`}>
                    <div className='container mx-auto px-4'>
                        <div className={`w-full flex items-center justify-between`}>
                            <div className={`w-auto`}>
                                <h1 className={`font-sora text-xl leading-[26px] font-bold ${pathname === '/' ? 'text-[#FFFFFF]' : 'text-[#0B0B0B]'} cursor-pointer`}>Gadget Heaven</h1>
                            </div>
                            <div className={`w-auto hidden md:block`}>
                                <nav className={`w-auto`}>
                                    <ul className={`w-auto flex items-center justify-center gap-x-5 md:gap-x-[35px] lg:gap-x-[48px]`}>
                                        <NavLink to='/' className={`font-sora text-base leading-5 ${pathname === '/' ? 'font-bold underline text-white' : 'font-normal text-[#0B0B0BB3]' }`}>Home</NavLink>
                                        <NavLink to='/statistics' className={`font-sora text-base leading-5 ${pathname === '/statistics' ? 'font-bold text-[#9538E2]' : (pathname === '/' ? 'font-medium text-white' : 'text-[#0B0B0BB3]')}`}>Statistics</NavLink>
                                        <NavLink to='/dashboard' className={`font-sora text-base leading-5 ${pathname === '/dashboard' ? 'font-bold text-[#9538E2]' : (pathname === '/' ? 'font-medium text-white' : 'text-[#0B0B0BB3]')}`}>Dashboard</NavLink>
                                    </ul>
                                </nav>
                            </div>
                            <div className={`w-auto flex items-center justify-center gap-x-3`}>
                                <div className={`w-auto flex items-center justify-center gap-x-3 md:gap-x-4`}>
                                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center bg-white border border-[#0B0B0B1A] rounded-full md:w-[40px] md:h-[40px]`}>
                                        <i className={`ri-shopping-cart-line text-lg ${pathname === '/' ? 'text-[#9538E2]' : 'text-[#0B0B0B]'}`}></i>
                                        <div className={`absolute top-[-6px] right-[-2.5px] w-[17px] h-[17px] border ${pathname === '/' ? 'border-[#9538E2]' : 'border-[#0B0B0B1A]'} bg-white rounded-full flex items-center justify-center`}>
                                            <span className={`font-sora text-[10px] font-medium ${pathname === '/' ? 'text-[#9538E2]' : 'text-[#0B0B0B]'}`}>1</span>
                                        </div>
                                    </div>
                                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center bg-white border border-[#0B0B0B1A] rounded-full md:w-[40px] md:h-[40px]`}>
                                        <i className={`ri-heart-line text-lg ${pathname === '/' ? 'text-[#9538E2]' : 'text-[#0B0B0B]'}`}></i>
                                        <div className={`absolute top-[-6px] right-[-2.5px] w-[17px] h-[17px] border ${pathname === '/' ? 'border-[#9538E2]' : 'border-[#0B0B0B1A]'} bg-white rounded-full flex items-center justify-center`}>
                                            <span className={`font-sora text-[10px] font-medium ${pathname === '/' ? 'text-[#9538E2]' : 'text-[#0B0B0B]'}`}>1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-auto md:hidden`} onClick={handleNavActive}>
                                    <i className={`ri-menu-fill text-2xl ${pathname === '/' ? 'text-white' : 'text-[#0B0B0B]'} cursor-pointer`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed z-20 top-0 ${isNavActive ? 'right-0 duration-300 ease-in' : 'right-[-100%] duration-300 ease-out'} w-full h-screen bg-white/80 backdrop-blur-xl md:hidden`}>
                        <div className={`w-[30px] h-[30px] bg-[#9538E2] flex items-center justify-center mt-7 ml-7 cursor-pointer`} onClick={handleNavActive}>
                            <i className={`ri-close-large-fill text-xl text-white`}></i>
                        </div>
                        <div className={`w-full mt-[60px]`}>
                            <nav className={`w-full`}>
                                <ul className={`w-full flex justify-center flex-col`}>
                                    <NavLink to='/' className={`font-sora text-base leading-[26px] ${pathname === '/' ? 'font-bold text-[#9538E2]' : 'font-normal text-black/50'} pl-7 border-b border-black/30 py-[18px]`}>Home</NavLink>
                                    <NavLink to='/statistics' className={`font-sora text-base leading-[26px] ${pathname === '/statistics' ? 'font-bold text-[#9538E2]' : 'font-normal text-black/50'} pl-7 border-b border-black/30 py-[18px]`}>Statistics</NavLink>
                                    <NavLink to='/dashboard' className={`font-sora text-base leading-[26px] ${pathname === '/dashboard' ? 'font-bold text-[#9538E2]' : 'font-normal text-black/50'} pl-7 border-b border-black/30 py-[18px]`}>Dashboard</NavLink>
                                    <NavLink to='/cart list' className={`font-sora text-base leading-[26px] ${pathname === '/cart list' ? 'font-bold text-[#9538E2]' : 'font-normal text-black/50'} pl-7 border-b border-black/30 py-[18px]`}>Cart List</NavLink>
                                    <NavLink to='/wish list' className={`font-sora text-base leading-[26px] ${pathname === '/wish list' ? 'font-bold text-[#9538E2]' : 'font-normal text-black/50'} pl-7 border-b border-black/30 py-[18px]`}>Wishlist</NavLink>
                                </ul>
                            </nav>
                        </div>
                        <div className={`w-full absolute left-0 bottom-[20px]`}>
                            <p className={`font-sora text-sm text-center text-black/30 flex items-center justify-center gap-x-[7px]`}>
                                <i className="ri-copyright-line"></i>
                                <span>Copyright 2024 - {new Date().getFullYear()} All right reserved</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;