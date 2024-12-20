import '../css/style.css';
import { useContext, useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CartContext } from '../../constants/CartContext';
import PageHeading from "../components/PageHeading";
import ProductCart from "../components/ProductCart";
import ProductWishList from "../components/ProductWishList";
import DynamicTitle from '../components/DynamicTitleComponents/DynamicTitle';
import { CartToWishlistSwitcher } from '/constants/CartAndWishlist';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import { PriceContext } from '../../constants/PriceContext';

const Dashboard = () => {
    const {saveCartData, sortByDescendingPrice} = useContext(CartContext);
    const {deleteDataToClickPurchase} = useContext(CartContext);
    const {handleTabBtn, cartTabActive, wishListActive} = useContext(CartToWishlistSwitcher);
    const {handleGenerateRandomNum} = useContext(PriceContext);
    const pageLocation = useLocation();

    const productPrice = saveCartData.map((productPrice) => productPrice.price);
    const totalPrice = productPrice.reduce((total, curr) => total + curr, 0);
    const TotalProductPrice = parseFloat(totalPrice.toFixed(2));

    return (
        <>
            <ScrollRestoration />
            <DynamicTitle title={'Dashboard'}/>
            <div className={`w-full`}>
                <div className={`w-full min-h-[50px] bg-[#9538E2] py-8`}>
                    <div className={'container mx-auto px-4'}>
                        <div className={`w-full`}>
                            <PageHeading title={`Dashboard`} para={`Welcome to your dashboard! Manage your Cart for ready-to-buy items and your Wishlist for saved favorites. Enjoy easy shopping control!`}></PageHeading>
                        </div>
                        <div className={`w-full flex items-center justify-center gap-x-3 mt-4 md:gap-x-4 md:mt-6 lg:gap-x-5 lg:mt-7 xl:gap-x-6 xl:mt-8`}>
                            <div className={`w-auto`}>
                                <button onClick={() => handleTabBtn('cart')} className={`w-[140px] min-h-[45px] rounded-full border border-white font-sora text-base leading-[26px] ${cartTabActive ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white font-medium'} transition duration-300 ease-in-out hover:bg-white hover:font-bold hover:text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[155px] lg:h-[52px] xl:w-[160px] xl:h-[52px]`}>Cart</button>
                            </div>
                            <div className={`w-auto`}>
                                <button onClick={() => handleTabBtn('wishlist')} className={`w-[140px] min-h-[45px] rounded-full border border-white font-sora text-base leading-[26px] ${wishListActive ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white font-medium'} transition duration-300 ease-in-out hover:bg-white hover:font-bold hover:text-[#9538E2] md:text-base lg:text-lg md:w-[150px] md:h-[48px] lg:w-[160px] lg:h-[52px] xl:w-[180px] xl:h-[52px]`}>Wishlist</button>
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
                                                        <div className={`btn-bg flex items-center justify-center gap-x-2 w-full h-full rounded-full btn-bg-transition`}>
                                                            <span  className={`font-sora text-sm leading-[26px] font-semibold md:text-base lg:text-lg`}>Sort by Price</span>
                                                            <div className={`w-auto`}>
                                                                <HiOutlineAdjustments size={20}/>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className={`w-auto`}>
                                                    <button onClick={() => {deleteDataToClickPurchase(saveCartData), handleGenerateRandomNum(), document.getElementById('my_modal_4').showModal()}} disabled={saveCartData.length ? false : true} className={`${saveCartData.length ? 'radial-btn' : 'bg-black/10'} w-[130px] h-[48px] rounded-full flex items-center justify-center p-[2px] md:w-[140px] md:h-[50px] lg:w-[150px] lg:h-[52px]`}>
                                                        <div className={`${saveCartData.length ? 'btn-bg-primary' : 'bg-black/30'} flex items-center justify-center bg-white w-full h-full rounded-full`}>
                                                            <span className={`font-sora text-sm leading-[26px] font-normal ${saveCartData.length ? 'text-white' : 'text-black/30'} md:text-base lg:text-lg`}>Purchase</span>
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
                                {(pageLocation.pathname === '/dashboard' && cartTabActive) && <ProductCart></ProductCart>}
                                {wishListActive && <ProductWishList></ProductWishList>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;