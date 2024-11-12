import '../css/style.css';
import { useContext, useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CartContext } from '../../constants/CartContext';
import PageHeading from "../components/PageHeading";
import ProductCart from "../components/ProductCart";
import ProductWishList from "../components/ProductWishList";

const Dashboard = () => {
    // state declare here -------------------------->
    const [cartTabActive, setCartTabActive] = useState(true);
    const [wishListActive, setWishListActive] = useState(false);
    const {saveCartData, sortByDescendingPrice} = useContext(CartContext);
    const {deleteDataToClickPurchase} = useContext(CartContext);

    // tab button event handle --------------------->
    const handleCartTab = (str) => {
        if(str === 'cart'){
            setCartTabActive(true);
            setWishListActive(false);
            return;
        };

        if(str === 'wishlist'){
            setCartTabActive(false);
            setWishListActive(true);
            return;
        };
    };

    const productPrice = saveCartData.map((productPrice) => productPrice.price);
    const totalPrice = productPrice.reduce((total, curr) => total + curr, 0);
    const TotalProductPrice = parseFloat(totalPrice.toFixed(2));

    return (
        <div className={`w-full`}>
            <div className={`w-full min-h-[50px] bg-[#9538E2] py-8`}>
                <div className={'container mx-auto px-4'}>
                    <div className={`w-full`}>
                        <PageHeading title={`Dashboard`} para={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></PageHeading>
                    </div>
                    <div className={`w-full flex items-center justify-center gap-x-3 mt-4 md:gap-x-4 md:mt-6 lg:gap-x-5 lg:mt-7 xl:gap-x-6 xl:mt-8`}>
                        <div className={`w-auto`}>
                            <button onClick={() => handleCartTab('cart')} className={`w-[140px] min-h-[45px] rounded-full border border-white font-sora text-base leading-[26px] ${cartTabActive ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white font-medium'} transition duration-300 ease-in-out hover:bg-white hover:font-bold hover:text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[155px] lg:h-[52px] xl:w-[160px] xl:h-[52px]`}>Cart</button>
                        </div>
                        <div className={`w-auto`}>
                            <button onClick={() => handleCartTab('wishlist')} className={`w-[140px] min-h-[45px] rounded-full border border-white font-sora text-base leading-[26px] ${wishListActive ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white font-medium'} transition duration-300 ease-in-out hover:bg-white hover:font-bold hover:text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[160px] lg:h-[52px] xl:w-[180px] xl:h-[52px]`}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full mb-[250px]`}>
                <div className={`w-full pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px]`}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full`}>
                            {
                                cartTabActive && 
                                <div className={`w-full flex flex-col items-center justify-between gap-y-6 sm:flex-row sm:gap-y-6 sm:gap-x-3 md:gap-x-4 lg:gap-x-6`}>
                                    <div className={`w-full flex items-center justify-between`}>
                                        <div className={`w-auto`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Cart</h1>
                                        </div>
                                        <div className={`w-auto text-center`}>
                                            <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Total Cost: $ {TotalProductPrice}</h1>
                                        </div>
                                    </div>
                                    <div className={`w-auto`}>
                                        <div className={`w-full flex items-center justify-center gap-x-3 md:gap-x-4`}>
                                            <div className={`w-auto`}>
                                                <button onClick={() => sortByDescendingPrice()} className={`radial-btn w-[160px] h-[48px] rounded-full flex items-center justify-center p-[2px] transition ease-in-out duration-300 group md:w-[175px] md:h-[50px] lg:w-[190px] lg:h-[52px]`}>
                                                    <div className={`btn-bg flex items-center justify-center gap-x-2 bg-white w-full h-full rounded-full btn-bg-transition`}>
                                                        <span  className={`font-sora text-sm leading-[26px] font-semibold md:text-base lg:text-lg`}>Sort by Price</span>
                                                        <div className={`w-auto`}>
                                                            <HiOutlineAdjustments size={20}/>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className={`w-auto`}>
                                                <button onClick={() => deleteDataToClickPurchase(saveCartData)} disabled={saveCartData.length ? false : true} className={`${saveCartData.length ? 'radial-btn' : 'bg-black/10'} w-[130px] h-[48px] rounded-full flex items-center justify-center p-[2px] md:w-[140px] md:h-[50px] lg:w-[150px] lg:h-[52px]`}>
                                                    <div className={`${saveCartData.length ? 'btn-bg-primary' : 'bg-black/5'} flex items-center justify-center bg-white w-full h-full rounded-full`}>
                                                        <span className={`font-sora text-sm leading-[26px] font-normal text-white md:text-base lg:text-lg`}>Purchase</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {   
                                wishListActive && 
                                <div className={`w-full`}>
                                    <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Wishlist</h1>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={`w-full mt-[50px]`}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full`}>
                            {cartTabActive && <ProductCart></ProductCart>}
                            {wishListActive && <ProductWishList></ProductWishList>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;