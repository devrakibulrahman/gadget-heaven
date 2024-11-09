import { MdOutlineClose } from "react-icons/md";

const ProductWishListCard = () => {
    return (
        <div className={`w-full p-5 min-h-[125px] bg-white rounded-xl md:p-6 md:rounded-2xl lg:p-7 xl:p-8`}>
            <div className={`w-full flex flex-col sm:flex-row sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-8`}>
                <div className={`w-full h-[260px] bg-[#D9D9D9] rounded-xl sm:w-[270px] sm:h-[162px] md:w-[285px] md:h-[190px] md:rounded-2xl`}>
                    <img src={``} alt="" />
                </div>
                <div className={`w-full mt-5 sm:mt-0`}>
                    <div className={`w-full flex items-center justify-between mb-3 md:mb-[18px]`}>
                        <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Name</h1>
                        <div className={`w-auto hidden sm:block`}>
                            <button className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]`}><MdOutlineClose/></button>
                        </div>
                    </div>
                    <div className={`w-full mb-2 md:mb-3 lg:mb-4`}>
                        <p className={`font-sora text-base leading-[25px] font-normal text-[#09080F99] md:text-lg md:leading-[30px]`}>Description</p>
                    </div>
                    <div className={`w-full`}>
                        <p className={`font-sora text-base leading-[30px] font-medium text-[#09080FCC] md:text-lg lg:text-xl`}>Price: $999.99</p>
                    </div>
                    <div className={`w-auto mt-4 flex items-center justify-between`}>
                        <button className='w-auto h-[45px] px-[22px] bg-[#9538E2] flex items-center gap-x-[10px] border border-[#9538E2] rounded-full md:h-[48px]'>
                            <span className={`font-sora text-sm leading-[26px] font-bold text-white md:text-base lg:text-lg`}>Add To Cart</span>
                        </button>
                        <div className={`w-auto sm:hidden`}>
                            <button className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}><MdOutlineClose/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductWishListCard;