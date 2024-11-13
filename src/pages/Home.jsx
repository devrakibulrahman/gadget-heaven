import '../css/style.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AllProducts from "../components/categoriesComponents/AllProducts";
import Laptops from "../components/categoriesComponents/Laptops";
import Phone from "../components/categoriesComponents/Phone";
import Accessories from "../components/categoriesComponents/Accessories";
import SmartWatch from "../components/categoriesComponents/SmartWatch";
import Macbook from "../components/categoriesComponents/Macbook";
import Iphone from "../components/categoriesComponents/Iphone";

const Home = () => {
    // get data from context api ------------------------------>
    const cateNavigate = useNavigate();
    const pageLocation = useLocation();

    const handleCateNavigate = (cate) => {
        cateNavigate(`${cate}`);
    };

    return (
        <>
            <div className={`w-full`}>
                <div className={`w-full px-4`}>
                    <div className={`w-full pl-[6px] pr-[6px] pb-[6px] border-l border-r border-b border-[#e2e2e2] rounded-bl-xl rounded-br-xl md:rounded-bl-2xl md:rounded-br-2xl lg:rounded-bl-3xl lg:rounded-br-3xl`}>
                        <div className={`w-full min-h-[200px] pb-[20px] bg-[#9538E2] rounded-bl-xl rounded-br-xl sm:pb-[30px] md:rounded-bl-2xl md:rounded-br-2xl lg:rounded-bl-3xl lg:rounded-br-3xl xl:min-h-[300px]`}>
                            <div className={`container mx-auto px-4`}>
                                <div className={`w-full flex flex-col items-center justify-center text-center mb-7 lg:mb-[50px] xl:mb-[60px]`}>
                                    <div className={`w-full max-w-[1110px] mb-3 md:mb-4 lg:mb-6`}>
                                        <h1 className={`font-sora text-3xl leading-[45px] font-bold text-[#FFFFFF] sm:text-4xl sm:leading-[50px] md:text-[40px] md:leading-[60px] lg:text-[48px] lg:leading-[65px] xl:text-[56px] xl:leading-[75px]`}>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                                    </div>
                                    <div className={`w-full max-w-[795px]`}>
                                        <p className={`font-sora text-sm leading-[26px] font-normal text-[#FFFFFF] md:text-base`}>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                    </div>
                                    <div className={`w-full mt-3 md:mt-4 lg:mt-6`}>
                                        <button className={`font-sora text-base leading-[26px] font-bold text-[#9538E2] w-[145px] h-[52px] bg-white rounded-full md:text-lg lg:text-xl md:w-[155px] md:h-[56px] lg:w-[160px] xl:w-[168px]`}>Shop Now</button>
                                    </div>
                                </div>
                                <div className={`w-full relative min-h-[200px] flex items-center justify-center xl:min-h-[200px]`}>
                                    <div className={`w-full xl:absolute xl:top-0 xl:left-0`}>
                                        <div className={`w-full max-w-[1110px] mx-auto xl:p-5 xl:border-2 xl:backdrop-blur-md  xl:bg-gradient-to-b xl:from-[#ffffff5b] xl:to-[#ffffff00] xl:border-[#f1f1f1] xl:rounded-3xl`}>
                                            <div className={`w-full h-[260px] bg-white bg-banner bg-center bg-cover bg-no-repeat rounded-xl sm:h-[350px] md:h-[400px] lg:h-[480px] md:rounded-2xl lg:rounded-3xl xl:rounded-3xl xl:h-[540px]`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full`}>
                    <div className={`w-full pt-[60px] sm:pt-[80px] md:pt-[100px] xl:pt-[450px]`}>
                        <div className={`container mx-auto px-4`}>
                            <div className={`w-full`}>
                                <div className={`w-full text-center`}>
                                    <h1 className={`font-sora text-2xl leading-[40px] font-bold text-[#0B0B0B] md:text-3xl md:leading-[45px] lg:text-4xl xl:text-[40px]`}>Explore Cutting-Edge Gadgets</h1>
                                </div>
                                <div className={`w-full mt-[48px] mb-[50px] flex items-center justify-center flex-col gap-x-6 gap-y-6 sm:items-start sm:justify-start sm:flex-row md:mb-[80px] lg:mb-[100px]`}>
                                    <div className={`w-full max-w-[400px] sm:max-w-[200px] md:max-w-[240px]`}>
                                        <div className={`w-auto bg-white border border-[#09080F1A] rounded-lg p-3 grid grid-cols-2 gap-2 md:p-4 lg:p-6 sm:grid-cols-1 sm:gap-y-3 md:gap-y-4 md:rounded-xl lg:rounded-2xl lg:gap-y-5 xl:gap-y-6`}>
                                            <button onClick={() => handleCateNavigate('/')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>All Product</button>
                                            <button onClick={() => handleCateNavigate('laptops')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/laptops' ? 'font-bold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>Laptops</button>
                                            <button onClick={() => handleCateNavigate('phones')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/phones' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>Phones</button>
                                            <button onClick={() => handleCateNavigate('accessories')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/accessories' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>Accessories</button>
                                            <button onClick={() => handleCateNavigate('smartwatches')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/smartwatches' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>Smart Watches</button>
                                            <button onClick={() => handleCateNavigate('macbook')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/macbook' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center sm:pl-7 rounded-[32px] h-[52px] sm:justify-start md:text-base lg:text-lg`}>MacBook</button>
                                            <button onClick={() => handleCateNavigate('iphone')} className={`font-sora text-sm leading-[26px] ${pageLocation.pathname === '/iphone' ? 'font-extrabold text-white bg-[#9538E2]' : 'font-medium text-[#09080F99] bg-[#09080F0D]'} flex justify-center items-center col-span-2 sm:pl-7 rounded-[32px] h-[52px] sm:justify-start sm:col-span-1 md:text-base lg:text-lg`}>Iphone</button>
                                        </div>
                                    </div>
                                    <div className={`w-full`}>
                                        {pageLocation.pathname === '/' && <AllProducts/>}
                                        {pageLocation.pathname === '/laptops' && <Laptops/>}
                                        {pageLocation.pathname === '/phones' && <Phone/>}
                                        {pageLocation.pathname === '/accessories' && <Accessories/>}
                                        {pageLocation.pathname === '/smartwatches' && <SmartWatch/>}
                                        {pageLocation.pathname === '/macbook' && <Macbook/>}
                                        {pageLocation.pathname === '/iphone' && <Iphone/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;