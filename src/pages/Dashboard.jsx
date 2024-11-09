import PageHeading from "../components/PageHeading";

const Dashboard = () => {
    return (
        <div className={`w-full`}>
            <div className={`w-full min-h-[50px] bg-[#9538E2] py-8`}>
                <div className={'container mx-auto px-4'}>
                    <div className={`w-full`}>
                        <PageHeading title={`Dashboard`} para={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></PageHeading>
                    </div>
                    <div className={`w-full flex items-center justify-center gap-x-3 mt-4 md:mt-6 lg:mt-7 xl:mt-8`}>
                        <div className={`w-auto`}>
                            <button className={`w-[140px] min-h-[45px] rounded-full bg-white border border-white font-sora text-base leading-[26px] font-bold text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[155px] lg:h-[52px] xl:w-[160px] xl:h-[52px]`}>Cart</button>
                        </div>
                        <div className={`w-auto`}>
                            <button className={`w-[140px] min-h-[45px] rounded-full bg-[#9538E2] border border-white font-sora text-base leading-[26px] font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:font-bold hover:text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[155px] lg:h-[52px] xl:w-[160px] xl:h-[52px]`}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;