import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { WishListContext } from "../../constants/WishListContext";
import { CartContext } from "../../constants/CartContext";
import { toast } from "react-toastify";
import { addDataToLocalStore } from "../utilities/LocalStore";
import PropTypes from 'prop-types';

const ProductWishListCard = ({wishlist}) => {
    const {handleDeleteDataToWishlist, handleAddToCartFromWishlist} = useContext(WishListContext);
    const {productCart, setProductCart} = useContext(CartContext);
    const {saveCartData} = useContext(CartContext);

    const saveCartDataIds = saveCartData.map((ids) => ids.product_id);
    const handleCart = (cartId, saveCartDataIds) => {
        
        if(saveCartDataIds.includes(cartId.product_id)){
            toast.warn('Already Add to Cart !!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            return;
        };

        if(!saveCartDataIds.includes(cartId.product_id)){
            toast.success('Add to cart successful',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            const newCartData = [...productCart, cartId];
            setProductCart(newCartData);
            addDataToLocalStore(cartId);
        };
    };
    return (
        <div className={`w-full p-5 min-h-[125px] bg-white rounded-xl sm:w-[455px] md:w-full md:p-6 md:rounded-2xl lg:p-7 xl:p-8`}>
            <div className={`w-full flex flex-col gap-y-3 sm:gap-y-5 md:flex-row md:gap-x-6 lg:gap-x-7 xl:gap-x-8`}>
                <div className={`w-full h-[260px] bg-[#D9D9D9] rounded-xl overflow-hidden sm:h-[250px] md:w-[350px] md:h-auto md:rounded-2xl`}>
                    <img src={wishlist.product_image} alt="product image" className="object-cover w-full h-full" />
                </div>
                <div className={`w-full mt-5 sm:mt-0`}>
                    <div className={`w-full flex items-center justify-between mb-3 md:mb-[18px]`}>
                        <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>{wishlist.product_title}</h1>
                        <div className={`w-auto hidden sm:block`}>
                            <button onClick={() => handleDeleteDataToWishlist(wishlist)} className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}><MdOutlineClose/></button>
                        </div>
                    </div>
                    <div className={`w-full mb-2 md:max-w-[850px] md:mb-3 lg:mb-4`}>
                        <p className={`font-sora text-base leading-[25px] font-normal text-[#09080F99] md:text-lg md:leading-[30px]`}>{wishlist.description}</p>
                    </div>
                    <div className={`w-full`}>
                        <p className={`font-sora text-base leading-[30px] font-medium text-[#09080FCC] md:text-lg lg:text-xl`}>Price: ${wishlist.price}</p>
                    </div>
                    <div className={`w-auto mt-4 flex items-center justify-between`}>
                        <button onClick={() => {handleCart(wishlist, saveCartDataIds), handleAddToCartFromWishlist(wishlist), handleDeleteDataToWishlist(wishlist)}} className='w-auto h-[45px] px-[22px] bg-[#9538E2] flex items-center gap-x-[10px] border border-[#9538E2] rounded-full md:h-[48px]'>
                            <span className={`font-sora text-sm leading-[26px] font-bold text-white md:text-base lg:text-lg`}>Add To Cart</span>
                        </button>
                        <div className={`w-auto sm:hidden`}>
                            <button onClick={() => handleDeleteDataToWishlist(wishlist)} className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}><MdOutlineClose/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductWishListCard.propTypes = {
    wishlist: PropTypes.object.isRequired,
};

export default ProductWishListCard;