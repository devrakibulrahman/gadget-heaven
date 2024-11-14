import DynamicTitle from "../components/DynamicTitleComponents/DynamicTitle";
import TeamMember from "../components/TeamMember";
import { ScrollRestoration, useLoaderData } from "react-router-dom";

const AboutUs = () => {
    const dataLoad = useLoaderData();

    return (
        <>
            <DynamicTitle title={'About Us'}></DynamicTitle>
            <ScrollRestoration></ScrollRestoration>
            <div className={`w-full`}>
                <div className={`container mx-auto px-4`}>
                    <div className={`w-full py-[30px]`}>
                        <div className={`w-full flex items-center justify-start gap-x-3`}>
                            <div className={`w-auto`}>
                                <p className={`font-sora text-base leading-5 font-semibold text-[#09080F]`}>About Us</p>
                            </div>
                            <div className={`w-[20px] h-[1px] bg-[#0B0B0BB3] sm:w-[80px]`}></div>
                            <div className={`w-auto flex items-center gap-x-1 sm:gap-x-2`}>
                                <p className={`font-sora text-[12px] leading-5 font-normal text-[#0B0B0BB3]`}>Since</p>
                                <div className={`w-[3px] h-[3px] bg-[#09080F99] rounded-full`}></div>
                                <p className={`font-sora text-[12px] leading-5 font-normal text-[#0B0B0BB3]`}>Why choose us</p>
                                <div className={`w-[3px] h-[3px] bg-[#09080F99] rounded-full`}></div>
                                <p className={`font-sora text-[12px] leading-5 font-normal text-[#0B0B0BB3]`}>Team</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full min-h-[600px] grid grid-cols-2 grid-rows-5 md:grid-rows-4 xl:grid-cols-8 xl:grid-rows-2 gap-[20px]`}>
                        <div className={`relative overflow-hidden w-full h-[500px] bg-img1 bg-cover bg-center bg-no-repeat col-span-2 row-span-2 p-[30px] rounded-xl md:h-[500px] xl:h-full xl:col-span-4 xl:row-span-2`}>
                            <div className={`w-full h-full absolute top-0 left-0 bg-black/40`}>
                                <div className={`w-full absolute bottom-0 left-0 p-[30px]`}>
                                    <div className={`w-full`}>
                                        <div className={`w-full mb-3`}>
                                            <h1 className={`font-sora text-3xl leading-[40px] font-bold text-white`}>Welcome to Gadget Heaven</h1>
                                        </div>
                                        <div className={`w-full`}>
                                            <p className={`font-sora text-base leading-[25px] font-normal text-white/80`}>At Gadget Heaven, we bring the latest tech products to your doorstep. From smartphones to smartwatches, we offer a wide range of gadgets designed to enhance your lifestyle. Our mission is to make top-quality tech accessible to everyone, ensuring a seamless and exciting shopping experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`relative overflow-hidden w-full bg-img4 bg-cover bg-center bg-no-repeat col-span-2 row-span-1 xl:h-full xl:col-span-4 xl:row-span-1 rounded-xl`}>
                            <div className={`w-full h-full absolute top-0 left-0 bg-black/40`}>
                                <div className={`w-full p-[30px] absolute bottom-0 left-0`}>
                                    <div className={`w-full mb-2`}>
                                        <h1 className={`font-sora text-xl leading-[25px] font-bold text-white`}>Why Choose Us?</h1>
                                    </div>
                                    <div className={`w-full max-w-[420px]`}>
                                        <p className={`font-sora text-base leading-[25px] font-normal text-white/80`}>Gadget Heaven offers top tech at great prices with exceptional service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`relative overflow-hidden w-full h-full bg-img3 bg-cover bg-center bg-no-repeat p-[30px] col-span-2 md:col-span-1 xl:h-full xl:col-span-2 rounded-xl`}>
                            <div className={`w-full h-full absolute left-0 bottom-0 bg-black/40`}>
                                <div className={`w-full p-[30px] absolute top-0 left-0`}>
                                    <div className={`w-full mb-2`}>
                                        <h1 className={`font-sora text-xl leading-[25px] font-bold text-white`}>Our Products</h1>
                                    </div>
                                    <div className={`w-full`}>
                                        <p className={`font-sora text-sm leading-[23px] font-light text-white/80`}>Discover the latest gadgets, from phones to laptops, at Gadget Heaven.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`relative overflow-hidden w-full h-full bg-img2 bg-cover bg-center bg-no-repeat col-span-2 md:col-span-1 xl:h-full xl:col-span-2 rounded-xl`}>
                            <div className={`w-full h-full absolute left-0 bottom-0 bg-black/40`}>
                                <div className={`w-full text-right absolute bottom-0 p-[30px]`}>
                                    <h1 className={`font-sora text-base leading-[18px] font-semibold text-white`}>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full min-h-[100px] bg-white my-[70px] p-[30px]`}>
                        <div className={`w-full`}>
                            <h1 className={`font-sora text-2xl leading-[40px] font-medium text-[#09080F]`}>Since Our Beginning</h1>
                            <div className={`w-full max-w-[1000px] mt-[10px]`}>
                                <p className={`font-sora text-lg leading-[30px] font-light text-[#09080F99]`}>2010 - Since our inception, Gadget Heaven has been dedicated to providing cutting-edge technology and exceptional service. Our passion for innovation drives us to offer the best gadgets that enrich everyday life and keep our customers connected to the future.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <div className={`w-full text-center mb-[80px] flex items-center justify-center flex-col md:mb-[120px]`}>
                            <h1 className={`font-sora text-2xl leading-[40px] font-bold text-[#0B0B0B] md:text-3xl md:leading-[45px] lg:text-4xl xl:text-[40px]`}>Meet Our Company Chef's</h1>
                            <div className={`w-full max-w-[795px] mt-[25px]`}>
                                <p className={`font-sora text-sm leading-[26px] font-light text-[#0B0B0B] md:text-base md:leading-[30px]`}>Meet our skilled company chefs who bring passion and expertise to every dish they create. Their innovative approach ensures each dining experience is memorable and of the highest quality.</p>
                            </div>
                        </div>
                        <div className={`w-full min-h-[500px] mb-[60px] flex flex-wrap justify-center gap-[50px]`}>
                            {
                                dataLoad.map((data, idx) => <TeamMember key={idx} teamData={data}/>)
                            }
                        </div>
                    </div>
                </div>
                <div className={`w-full min-h-[200px] mt-[80px] mb-[80px] bg-white`}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full py-[30px] flex flex-col items-center justify-center md:py-[50px] lg:py-[60px]`}>
                            <div className={`w-full text-center flex flex-col items-center justify-center`}>
                                <h1 className={`font-sora text-xl leading-[35px] font-bold text-[#0B0B0B] md:text-2xl md:leading-[40px]`}>Sing Up For Newsletter</h1>
                                <div className={`w-full max-w-[700px] mt-[16px]`}>
                                    <p className={`font-sora text-base leading-[28px] font-light text-[#0B0B0B]`}>Sign up for our newsletter to stay updated with the latest news, exclusive offers, and insightful content delivered straight to your inbox.</p>
                                </div>
                            </div>
                            <div className={`w-full max-w-[500px] mt-[30px]`}>
                                <div className={`relative w-full h-[55px] bg-black rounded-lg`}>
                                    <input id="input" name="email" type="email" autoComplete="off" placeholder="email@gmail.com" className={`w-full h-full border border-black/20 pl-[20px] pr-[150px] rounded-md outline-none font-sora font-light text-[#0B0B0B]`}/>
                                    <button className={`w-[120px] h-[54px] absolute top-0 right-0 bg-[#0B0B0B] font-sora text-base leading-[25px] font-medium text-white rounded-lg border border-black`}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;