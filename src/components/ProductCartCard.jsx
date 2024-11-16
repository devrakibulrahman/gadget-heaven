import { MdOutlineClose } from "react-icons/md";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { CartContext } from "../../constants/CartContext";
import { PriceContext } from "../../constants/PriceContext";

const ProductCartCard = ({cart}) => {
    const {handleDeleteToCart, getPriceData, handleAddPrice} = useContext(CartContext);
    const {handleDeletePrice, handleGenerateRandomNum} = useContext(PriceContext);
    
    return (
        <div className={`w-full p-5 min-h-[125px] bg-white rounded-xl sm:w-[455px] md:w-full md:p-6 md:rounded-2xl lg:p-7 xl:p-8`}>
            <div className={`w-full flex flex-col gap-y-3 sm:gap-y-5 md:flex-row md:gap-x-6 lg:gap-x-7 xl:gap-x-8`}>
                <div className={`w-full h-[260px] bg-[#D9D9D9] rounded-xl overflow-hidden sm:w-full sm:h-[250px] md:w-[300px] md:h-auto md:rounded-2xl`}>
                    <img src={cart.product_image} alt="product image" className="object-cover w-full h-full"/>
                </div>
                <div className={`w-full mt-5 sm:mt-0`}>
                    <div className={`w-full flex items-center justify-between mb-3 md:mb-[18px]`}>
                        <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>{cart.product_title}</h1>
                        <div className={`w-auto hidden sm:block`}>
                            <button onClick={() => {handleDeleteToCart(cart), handleDeletePrice(cart.price), handleGenerateRandomNum(), handleAddPrice(cart.price, getPriceData)}} className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}><MdOutlineClose/></button>
                        </div>
                    </div>
                    <div className={`w-full mb-2 md:max-w-[850px] md:mb-3 lg:mb-4`}>
                        <p className={`font-sora text-base leading-[25px] font-normal text-[#09080F99] md:text-lg md:leading-[30px]`}>{cart.description}</p>
                    </div>
                    <div className={`w-full flex items-center justify-between`}>
                        <p className={`font-sora text-base leading-[30px] font-medium text-[#09080FCC] md:text-lg lg:text-xl`}>Price: ${cart.price}</p>
                        <div className={`w-auto sm:hidden`}>
                            <button onClick={() => {handleDeleteToCart(cart), handleDeletePrice(cart.price), handleGenerateRandomNum(), handleAddPrice(cart.price, getPriceData)}} className={`w-[26px] h-[26px] border border-red-500 flex items-center justify-center rounded-full text-red-500 bg-white transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}><MdOutlineClose/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCartCard.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default ProductCartCard;