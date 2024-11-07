
const ProductItems = () => {
    return (
        <div className={`w-full max-w-[400px] min-h-[380px] bg-white p-5 rounded-2xl sm:max-w-full md:p-6 xl:min-h-[380px]`}>
            <div className={`w-full h-[240px] bg-[#D9D9D9] rounded-xl xl:h-[200px] 2xl:h-[240px]`}>
                <img src="/" alt="" />
            </div>
            <div className={`w-full mt-6 flex flex-col justify-start gap-y-1 md:gap-y-2 lg:gap-y-3`}>
                <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Name</h1>
                <p className={`font-sora text-base leading-[25px] font-medium text-[#09080F99] md:text-lg lg:text-xl`}>Price</p>
            </div>
            <div className={`w-full mt-4`}>
                <button className={`font-sora text-base leading-[26px] font-semibold text-[#9538E2] bg-[#8d03ff] w-[150px] h-[48px] rounded-full overflow-hidden relative md:text-lg md:w-[160px] md:h-[55px]`}>
                    <div className={`w-[142.5px] h-[42px] translate-x-[2.5%] translate-y-[-49.10%] absolute flex items-center justify-center md:translate-x-[2.2%] md:translate-y-[-51%] bg-white rounded-full z-10 md:w-[153px] md:h-[50px] overflow-hidden transition duration-200 ease-in-out hover:bg-[#8d03ff] group`}>
                        <span className={`absolute top-[20%] left-[12%] z-10 group-hover:text-white`}>View Details</span>
                        <div className={`w-[100px] h-[100px] absolute rounded-full group-hover:bg-[#f53eff] blur-xl bottom-[-155%] left-[15%]`}></div>
                    </div>
                    <div className={`w-[100px] h-[100px] absolute bottom-[-155%] left-[15%] rounded-full blur-xl bg-[#f53eff]`}></div>
                </button>
            </div>
        </div>
    );
};

export default ProductItems;