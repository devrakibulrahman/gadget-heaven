import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { RiShoppingCartLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../constants/CartContext';
import { addDataToLocalStore, addDataToWishlistLocalStore } from '../utilities/LocalStore';
import { toast } from 'react-toastify';
import { WishListContext } from '../../constants/WishListContext';

const ProductDetailsCard = ({idFromURL}) => {
    // get data from api ------------------------------------------>
    const data = useLoaderData();
    const {productCart, setProductCart} = useContext(CartContext);
    const {saveCartData} = useContext(CartContext);
    const {productWishList, setProductWishList} = useContext(WishListContext);
    const {saveWishListData} = useContext(WishListContext);
    
    // find the data and show data in display --------------------->
    const findProductDetails = data.find((product) => product.product_id === idFromURL.product_id);
    const findProductId = saveWishListData.find((productId) => productId.product_id === idFromURL.product_id);

    // destructure the props -------------------------------------->
    const {product_title, product_image, price, description, Specification, availability, rating} = findProductDetails;
    const saveCartDataIds = saveCartData.map((ids) => ids.product_id);
    const saveWishlistDataIds = saveWishListData.map((ids) => ids.product_id);

    const handleCart = (cartId, saveCartDataIds) => {

        if(saveCartDataIds.includes(cartId.product_id)){
            toast.warn('Already Add To Cart !!', {
                position: "top-center",
                autoClose: 2000,
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
            toast.success('Add To Cart Successful',{
                position: "top-center",
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
            return;
        };
    };

    const handleWishlist = (wishlistId, saveWishlistDataIds) => {
        if(saveWishlistDataIds.includes(wishlistId.product_id)){
            toast.warn('Already Add To Wishlist !!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            return;
        };

        if(!saveWishlistDataIds.includes(wishlistId.product_id)){
            toast.success('Add To Wishlist successful',{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            const newWishlistData = [...productWishList, wishlistId];
            setProductWishList(newWishlistData);
            addDataToWishlistLocalStore(wishlistId);
        };
    };

    return (
        <>
            <div className={`w-full min-h-[565px] bg-white p-4 rounded-xl md:p-5 lg:p-6 xl:p-7 2xl:p-8 md:rounded-2xl lg:rounded-3xl`}>
                <div className={`w-full flex justify-center flex-col gap-y-5 lg:flex-row lg:gap-x-8`}>
                    <div className={`w-auto min-h-[100px]`}>
                        <div className={`w-full h-[280px] bg-[#ECECEC] rounded-2xl overflow-hidden sm:h-[320px] md:h-[503px] lg:w-[400px] lg:h-full xl:w-[550px]`}>
                            <img src={product_image} alt="product image" className='object-cover w-full h-full'/>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <div className={`w-full flex justify-between md:flex-col md:gap-y-4`}>
                            <div className={`w-auto`}>
                                <h1 className={`font-sora text-lg leading-5 font-semibold text-[#09080F] md:text-xl md:leading-[25px] lg:text-2xl lg:leading-[30px] xl:text-[28px] xl:leading-[35px]`}>{product_title}</h1>
                                <p className={`font-sora text-base leading-[30px] font-medium text-[#09080FCC] mt-2 md:mt-3 md:text-lg lg:text-xl`}>Price: ${price}</p>
                            </div>
                            <div className={`h-8 flex items-center justify-center border ${availability ? 'border-[#309C08] bg-[#309C081A] w-[87px] ' : 'border-[#ff1515] bg-[#9c08081a] w-[120px]'} rounded-full`}>
                                <p className={`font-sora text-sm leading-[18px] font-medium ${availability ? 'text-[#309C08]' : 'text-[#ff1515]'}`}>{availability ? 'In Stock' : 'Out of Stock'}</p>
                            </div>
                        </div>
                        <div className={`w-full mt-3 md:mt-4`}>
                            <p className={`font-sora text-base leading-[25px] font-normal text-[#09080F99] md:text-lg md:leading-[30px]`}>{description}</p>
                        </div>
                        <div className={`w-full mt-3 md:mt-4`}>
                            <p className={`font-sora text-base leading-[25px] font-bold text-[#09080F] md:text-lg md:leading-[30px]`}>Specification</p>
                            <div className={`w-full mt-3`}>
                                {
                                    Specification.map((feature, idx) => <p key={idx} className={`font-sora text-base leading-[25px] font-normal text-[#09080F99] md:text-lg md:leading-[30px]`}><span>{idx + 1}.</span> {feature}</p>)
                                }
                            </div>
                        </div>
                        <div className={`w-full flex items-center gap-x-2 mt-3 md:mt-4`}>
                            <p className={`font-sora text-base leading-[25px] font-bold text-[#09080F] md:text-lg md:leading-[30px]`}>Ratings</p>
                            <div className={`w-auto`}>
                                <BiSolidStar color="#09080F" size={16} />
                            </div>
                        </div>
                        <div className={`w-auto mt-3 flex items-center gap-x-3 md:gap-x-4`}>
                            <div className={`h-[20px]`}>
                                <Rating
                                    initialRating={rating}
                                    fractions={2}
                                    emptySymbol={<BiStar color="#F9C004" size={20} />}
                                    placeholderSymbol={<BiSolidStarHalf color="#F9C004" size={20} />}
                                    fullSymbol={<BiSolidStar color="#F9C004" size={20} />}
                                />
                            </div>
                            <div className={`w-[50px] min-h-[32px] bg-[#09080F0D] rounded-full flex items-center justify-center`}>
                                <p className={`font-sora text-sm leading-[18px] font-medium text-[#09080FCC]`}>{rating}</p>
                            </div>
                        </div>
                        <div className={`w-full flex items-center gap-x-3 mt-3 md:gap-x-4 md:mt-4`}>
                            <div className={`w-auto`}>
                                <button onClick={() => {handleCart(idFromURL, saveCartDataIds, findProductDetails)}} className='w-auto h-[45px] px-[22px] bg-[#9538E2] flex items-center gap-x-[10px] border border-[#9538E2] rounded-full md:h-[48px]'>
                                    <span className={`font-sora text-sm leading-[26px] font-bold text-white md:text-base lg:text-lg`}>Add To Cart</span>
                                    <div className={`w-auto`}>
                                        <RiShoppingCartLine color={`#fff`} size={22}/>
                                    </div>
                                </button>
                            </div>
                            <div className={`w-auto`}>
                                <button onClick={() => handleWishlist(idFromURL, saveWishlistDataIds)} disabled={findProductId ? true : false} className={`w-[48px] h-[48px] ${findProductId ? 'bg-[#9538E2] border-[#9538E2] text-black/50' : 'bg-white hover:bg-[#9538E2] hover:border-[#9538E2] group'} border border-[#09080F0D] flex items-center justify-center rounded-full transition ease-in-out duration-300`}>
                                    <i className={`ri-heart-line text-[22px] ${findProductId ? 'text-white' : 'text-[#09080FCC]]'} group-hover:text-white`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ProductDetailsCard.propTypes = {
    idFromURL: PropTypes.object.isRequired,
};

export default ProductDetailsCard;