import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
    return (
        <div className={`w-full min-h-[20vh] bg-white`}>
            <div className={`container mx-auto px-4`}>
                <div className={`w-full flex items-center justify-center flex-col pt-[50px]`}>
                    <div className={`w-full flex flex-col items-center justify-center`}>
                        <h1 className={`font-sora text-xl leading-[40px] font-bold text-[#09080F] md:text-[25px] lg:text-[32px]`}>Gadget Heaven</h1>
                        <div className={`text-center mt-1 md:mt-2 lg:mt-3`}>
                            <p className={`font-sora text-sm leading-[25px] font-medium text-[#09080F99] md:text-base`}>Leading the way in cutting-edge technology and innovation.</p>
                        </div>
                    </div>
                    <div className={`w-full border-b border-[#09080F1A] my-7 md:my-5 lg:my-[30px]`}></div>
                    <div className={`w-full flex flex-wrap gap-x-[50px] gap-y-[30px] justify-start sm:text-center sm:justify-center sm:items-center md:gap-x-[100px] lg:gap-x-[165px]`}>
                        <div className={`w-auto flex items-center gap-x-[50px] md:gap-x-[100px] lg:gap-x-[165px]`}>
                            <div className={`w-auto`}>
                                <h1 className={`font-sora text-base leading-[18px] font-bold text-[#09080F] md:text-lg md:leading-[23px]`}>Services</h1>
                                <nav className={`w-auto mt-4`}>
                                    <ul className={`w-auto flex flex-col justify-start gap-y-2 md:gap-y-3 lg:gap-y-4`}>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Product Support</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Order Tracking</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Shipping & Delivery</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Returns</Link>
                                    </ul>
                                </nav>
                            </div>
                            <div className={`w-auto`}>
                                <h1 className={`font-sora text-base leading-[18px] font-bold text-[#09080F] md:text-lg md:leading-[23px]`}>Company</h1>
                                <nav className={`w-auto mt-4`}>
                                    <ul className={`w-auto flex flex-col justify-start gap-y-2 md:gap-y-3 lg:gap-y-4`}>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>About Us</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>America Branch</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Korea Branch</Link>
                                        <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Bangladesh Branch</Link>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className={`w-auto`}>
                            <h1 className={`font-sora text-base leading-[18px] font-bold text-[#09080F] md:text-lg md:leading-[23px]`}>Legal</h1>
                            <nav className={`w-auto mt-4`}>
                                <ul className={`w-auto flex flex-col justify-start gap-y-2 md:gap-y-3 lg:gap-y-4`}>
                                    <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Terms of Service</Link>
                                    <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Privacy Policy</Link>
                                    <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>Cookie Policy</Link>
                                    <Link className={`font-sora text-sm leading-[25px] font-normal text-[#09080F99] transition duration-300 ease-in-out hover:underline md:text-base md:leading-4`}>community standards</Link>
                                </ul>
                            </nav>
                        </div>
                        <div className={`w-full flex items-center justify-center gap-x-3 mt-[28px]`}>
                            <div className={`w-[40px] h-[40px] bg-[#9538E2] flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out hover:translate-y-[-5px]`}>
                                <i className={`ri-facebook-box-fill text-white text-xl`}></i>
                            </div>
                            <div className={`w-[40px] h-[40px] bg-[#9538E2] flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out hover:translate-y-[-5px]`}>
                                <i className={`ri-instagram-fill text-white text-xl`}></i>
                            </div>
                            <div className={`w-[40px] h-[40px] bg-[#9538E2] flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out hover:translate-y-[-5px]`}>
                                <i className={`ri-linkedin-box-fill text-white text-xl`}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full pt-[45px] pb-[35px] md:pt-[45px] md:pb-[35px] lg:py-[50px] lg:pb-[35px]`}>
                    <div className={`w-auto text-center`}>
                        <p className={`font-sora text-sm text-center text-black/30 flex items-center justify-center gap-x-[7px]`}>
                            <i className="ri-copyright-line"></i>
                            <span>Copyright 2024 - {new Date().getFullYear()} All right reserved</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;