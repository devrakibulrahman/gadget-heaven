
const Dashboard = () => {
    return (
        <div className="w-full bg-[#9538E2] py-[30px] md:py-[40] lg:py-[50px]">
            <div className="container mx-auto px-4">
                <div className="w-full text-center">
                    <div className="w-full flex items-center justify-center flex-col">
                        <h1 className="font-sora text-xl leading-[26px] font-bold text-[#FFFFFF] md:text-2xl md:leading-[30px] lg:text-[32px] lg:leading-[40px] mb-2 md:mb-3 lg:mb-4">Dashboard</h1>
                        <div className="w-full max-w-[795px]">
                            <p className="font-sora text-sm leading-[26px] font-normal text-[#FFFFFF] md:text-base ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-3 md:gap-x-4 lg:gap-x-6 mt-5 md:mt-6 lg:mt-[32px]">
                        <button className="w-[120px] min-h-[40px] bg-white rounded-full font-sora text-sm leading-[26px] font-extrabold text-[#9538E2] border md:text-base md:w-[130px] md:min-h-[42px] lg:w-[195px] lg:min-h-[52px] lg:text-lg">Cart</button>
                        <button className="w-[120px] min-h-[40px] rounded-full font-sora text-sm leading-[26px] font-medium text-white border transition ease-in-out duration-200 hover:text-[#9538E2] hover:font-extrabold hover:bg-white md:text-base md:w-[130px] md:min-h-[42px] lg:w-[203px] lg:min-h-[52px] lg:text-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;