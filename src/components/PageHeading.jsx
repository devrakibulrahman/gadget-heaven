
const PageHeading = () => {
    return (
        <div className={`w-full`}>
            <div className={`w-full flex flex-col items-center justify-center pt-8`}>
                <h1 className={`font-sora text-2xl leading-7 font-bold text-[#FFFFFF] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-10`}>Product Details</h1>
                <div className={`w-full max-w-[795px] text-center mt-4`}>
                    <p className={`font-sora text-sm leading-[26px] font-light text-[#FFFFFF] md:text-base`}>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;