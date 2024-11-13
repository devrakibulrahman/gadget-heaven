import AllProducts from "../components/categoriesComponents/AllProducts";
import Accessories from "../components/showNowCategoryComponents/Accessories";
import Phone from "../components/showNowCategoryComponents/Phone";
import Laptops from "../components/showNowCategoryComponents/Laptops";
import SmartWatch from "../components/showNowCategoryComponents/SmartWatch";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";



const ShopNow = () => {
    const cateNavigate = useNavigate();
    const pageLocation = useLocation();
    const [btnActive, setBtnActive] = useState(false);

    const handleCateNavigate = (category) => {
        cateNavigate(`${category}`);
    };

    const handleFilterBtn = () => {
        setBtnActive(!btnActive);
    };

    const handleCloseBtn = () => {
        setBtnActive(!btnActive);
    };

    return (
        <div className={`w-full`}>
            <div className={`w-full min-h-[50px] bg-[#9538E2] py-[30px] md:py-[40px] lg:py-[50px]`}>
                <div className={`container mx-auto px-4`}>
                    <div className={`w-full min-h-[100px]`}>
                        <div className={`w-full flex items-center justify-center flex-col text-center`}>
                            <h1 className={`font-sora text-2xl leading-[40px] font-bold text-[#FFFFFF] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-10`}>Welcome To Gadget Heaven</h1>
                            <div className={`w-full max-w-[795px] text-center mt-4`}>
                                <p className={`font-sora text-sm leading-[26px] font-light text-[#FFFFFF] md:text-base`}>Your go to shop for the latest gadgets! Discover top smartphones, smartwatches, laptops, and more. Upgrade your tech and stay ahead with innovative products tailored for your lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full py-5 bg-white/70 sticky top-0 left-0 z-10 backdrop-blur-md`}>
                <div className={`container mx-auto px-4`}>
                    <div className={`w-full`}>
                        <div className={`w-full hidden md:block`}>
                            <nav className={`w-auto`}>
                                <ul className={`w-full flex items-center gap-x-5`}>
                                    <button onClick={() => handleCateNavigate('/shop now')} className={`font-sora text-sm leading-5 font-semibold ${pageLocation.pathname === '/shop%20now' ? 'text-[#9538E2]' : 'text-[#0B0B0BB3]'}`}>All Product</button>
                                    <button onClick={() => handleCateNavigate('laptops')} className={`font-sora text-sm leading-5 font-semibold ${pageLocation.pathname === '/shop%20now/laptops' ? 'text-[#9538E2]' : 'text-[#0B0B0BB3]'}`}>Laptops</button>
                                    <button onClick={() => handleCateNavigate('smartphones')} className={`font-sora text-sm leading-5 font-semibold ${pageLocation.pathname === '/shop%20now/smartphones' ? 'text-[#9538E2]' : 'text-[#0B0B0BB3]'}`}>Smart Phones</button>
                                    <button onClick={() => handleCateNavigate('smartwatches')} className={`font-sora text-sm leading-5 font-semibold ${pageLocation.pathname === '/shop%20now/smartwatches' ? 'text-[#9538E2]' : 'text-[#0B0B0BB3]'}`}>Smart Watches</button>
                                    <button onClick={() => handleCateNavigate('accessories')} className={`font-sora text-sm leading-5 font-semibold ${pageLocation.pathname === '/shop%20now/accessories' ? 'text-[#9538E2]' : 'text-[#0B0B0BB3]'}`}>Accessories</button>
                                </ul>
                            </nav>
                        </div>
                        <div className={`w-auto block md:hidden text-right`}>
                            <button onClick={handleFilterBtn} className={`font-sora text-sm leading-5 font-semibold text-[#0B0B0BB3] transition ease-in-out duration-200 hover:text-[#9538E2]`}>Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full min-h-[200px]`}>
                <div className={'w-full'}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full pt-[50px] pb-[100px]`}>
                            <div className={`w-full`}>
                                {
                                    pageLocation.pathname === '/shop%20now' && 
                                
                                    <div className={`w-full`}>
                                        <div className={`w-full`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>All Products</h1>
                                        </div>
                                        <div className={`w-full mt-[30px]`}>
                                            <AllProducts/>
                                        </div>
                                    </div>
                                }
                                {
                                    pageLocation.pathname === '/shop%20now/laptops' && 

                                    <div className={`w-full`}>
                                        <div className={`w-full`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Laptops</h1>
                                        </div>
                                        <div className={`w-full mt-[30px]`}>
                                            <Laptops/>
                                        </div>
                                    </div>
                                }
                                {
                                    pageLocation.pathname === '/shop%20now/smartphones' && 

                                    <div className={`w-full`}>
                                        <div className={`w-full`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Smart Phones</h1>
                                        </div>
                                        <div className={`w-full mt-[30px]`}>
                                            <Phone></Phone>
                                        </div>
                                    </div>
                                }
                                {
                                    pageLocation.pathname === '/shop%20now/smartwatches' &&

                                    <div className={`w-full`}>
                                        <div className={`w-full`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Smart Watch</h1>
                                        </div>
                                        <div className={`w-full mt-[30px]`}>
                                            <SmartWatch></SmartWatch>
                                        </div>
                                    </div>

                                }
                                {
                                    pageLocation.pathname === '/shop%20now/accessories' &&
                                    
                                    <div className={`w-full`}>
                                        <div className={`w-full`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Accessories</h1>
                                        </div>
                                        <div className={`w-full mt-[30px]`}>
                                            <Accessories></Accessories>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full min-h-screen bg-black/15 fixed transition-all ${btnActive ? 'bottom-0 duration-300 ease-in-out' : 'bottom-[-120%] duration-300 ease-linear'} left-0 z-30 md:hidden`}>
                <div className={`w-full min-h-[350px] bg-white fixed transition-all ${btnActive ? 'bottom-0 duration-300 ease-in-out' : 'bottom-[-100%] duration-300 ease-linear'} left-0 rounded-tr-[16px] rounded-tl-[16px] p-[30px]`}>
                    <div className={`w-full text-right`}>
                        <button onClick={handleCloseBtn} className={`font-sora text-sm leading-5 font-medium text-[#0B0B0BB3] transition ease-in-out duration-200 hover:text-[#9538E2]`}>Close</button>
                    </div>
                    <div className={`w-full`}>
                        <h1 className={`font-sora text-base leading-[25px] font-bold text-[#0B0B0BB3]`}>Categories</h1>
                    </div>
                    <div className={`w-full grid grid-cols-2 gap-4 mt-[30px]`}>
                        <button onClick={() => handleCateNavigate('/shop now')} className={`font-sora text-sm leading-5 font-semibold w-full h-[55px] rounded-full ${pageLocation.pathname === '/shop%20now' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>All Product</button>
                        <button onClick={() => handleCateNavigate('laptops')} className={`font-sora text-sm leading-5 font-semibold  w-full h-[55px] rounded-full ${pageLocation.pathname === '/shop%20now/laptops' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>Laptops</button>
                        <button onClick={() => handleCateNavigate('smartphones')} className={`font-sora text-sm leading-5 font-semibold  w-full h-[55px] rounded-full ${pageLocation.pathname === '/shop%20now/smartphones' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>Smart Phones</button>
                        <button onClick={() => handleCateNavigate('smartwatches')} className={`font-sora text-sm leading-5 font-semibold  w-full h-[55px] rounded-full ${pageLocation.pathname === '/shop%20now/smartwatches' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>Smart Watches</button>
                        <button onClick={() => handleCateNavigate('accessories')} className={`font-sora text-sm leading-5 font-semibold  w-full h-[55px] rounded-full ${pageLocation.pathname === '/shop%20now/accessories' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'} col-span-2`}>Accessories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;