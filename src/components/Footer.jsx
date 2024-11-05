import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full bg-white py-[50px]">
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <div className="w-full mb-[20px] text-center md:mb-[30px]">
                        <h1 className="font-sora text-[24px] leading-[40px] font-bold text-[#09080F] mb-1 md:text-[30px] lg:text-3xl 2xl:text-[32px] md:mb-2 lg:mb-3">Gadget Heaven</h1>
                        <p className="font-sora text-sm leading-[26px] font-medium text-[#09080F99] md:text-base">Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                    <div className="w-full border-t border-[#09080F1A]"></div>
                    <div className="w-full flex flex-col items-center justify-center mt-[20px]">
                        <div className="w-auto md:mt-[30px] flex flex-wrap gap-y-[20px] gap-x-[80px] md:gap-x-[105px] lg:gap-x-[165px]">
                            <div className="w-auto flex gap-x-[80px] md:justify-between md:gap-x-[105px] lg:gap-x-[165px]">
                                <div className="w-auto sm:text-center">
                                    <h2 className="font-sora text-base leading-[23px] font-bold text-[#09080F] md:text-lg">Services</h2>
                                    <nav className="w-auto mt-2 md:mt-4">
                                        <ul className="w-auto flex flex-col md:gap-y-2 md:items-center">
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Product Support</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Order Tracking</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Shipping & Delivery</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Returns</Link>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="w-auto sm:text-center">
                                    <h2 className="font-sora text-base leading-[23px] font-bold text-[#09080F] md:text-lg">Company</h2>
                                    <nav className="w-auto mt-2 md:mt-4">
                                        <ul className="w-auto flex flex-col md:gap-y-2 md:items-center">
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">About Us</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">America Branch</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Korean Branch</Link>
                                            <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Bangladesh Branch</Link>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="w-auto sm:text-center">
                                <h2 className="font-sora text-base leading-[23px] font-bold text-[#09080F] md:text-lg">Legal</h2>
                                <nav className="w-auto mt-2 md:mt-4">
                                    <ul className="w-auto flex flex-col md:gap-y-2 md:items-center">
                                        <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Terms of Service</Link>
                                        <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Privacy Policy</Link>
                                        <Link to='/' className="font-sora text-sm leading-[32px] font-normal text-[#09080F99] md:text-base">Cookie Policy</Link>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="w-auto flex items-center justify-center gap-x-4 mt-[35px] md:mt-[50px]">
                            <div className="w-[40px] h-[40px] bg-[#9538E2] rounded-full flex items-center justify-center cursor-pointer transition ease-in-out  duration-300 hover:-translate-y-1">
                                <i className="ri-facebook-box-fill text-2xl text-white"></i>
                            </div>
                            <div className="w-[40px] h-[40px] bg-[#9538E2] rounded-full flex items-center justify-center cursor-pointer transition ease-in-out  duration-300 hover:-translate-y-1">
                                <i className="ri-instagram-fill text-2xl text-white"></i>
                            </div>
                            <div className="w-[40px] h-[40px] bg-[#9538E2] rounded-full flex items-center justify-center cursor-pointer transition ease-in-out  duration-300 hover:-translate-y-1">
                                <i className="ri-linkedin-box-fill text-2xl text-white"></i>
                            </div>
                        </div>
                        <div className="w-full pt-[30px] text-center">
                            <p className="font-sora text-sm leading-[30px] font-normal text-[#09080F]/30">Copyright &copy; 2024 - {new Date().getFullYear()} Gadget Heaven All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;