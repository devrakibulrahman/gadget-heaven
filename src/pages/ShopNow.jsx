import AllProducts from "../components/categoriesComponents/AllProducts";
import { NavLink } from "react-router-dom";


const ShopNow = () => {
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
                        <nav className={`w-auto`}>
                            <ul className={`w-full flex items-center gap-x-5`}>
                                <NavLink path='' className={`font-sora text-sm leading-5 font-normal text-[#9538E2]`}>All Product</NavLink>
                                <NavLink path='' className={`font-sora text-sm leading-5 font-normal text-[#0B0B0BB3]`}>Laptops</NavLink>
                                <NavLink path='' className={`font-sora text-sm leading-5 font-normal text-[#0B0B0BB3]`}>Smart Phones</NavLink>
                                <NavLink path='' className={`font-sora text-sm leading-5 font-normal text-[#0B0B0BB3]`}>Smart Watch</NavLink>
                                <NavLink path='' className={`font-sora text-sm leading-5 font-normal text-[#0B0B0BB3]`}>Accessories</NavLink>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={`w-full min-h-[200px]`}>
                <div className={'w-full'}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full pt-[50px] pb-[100px]`}>
                            <div className={`w-full`}>
                                <div className={`w-full`}>
                                    <div className={`w-full`}>
                                        <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>All Products</h1>
                                    </div>
                                    <div className={`w-full mt-[30px]`}>
                                        <AllProducts></AllProducts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;