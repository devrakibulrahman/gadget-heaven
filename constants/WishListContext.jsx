import { createContext, useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { addTotalPriceToSetItem, deleteDataFromWishlist, getDataFromWishlistToLocalStore, getTotalPriceDataFromLocalStore } from "../src/utilities/LocalStore";
import { toast } from "react-toastify";

const WishListContext = createContext();

const WishListProvider = ({children}) => {
    const [productWishList, setProductWishList] = useState([]);
    const [saveWishListData, setWishListData] = useState([]);

    const handleDeleteDataToWishlist = (data) => {
        const removeData = saveWishListData.filter((remData) => remData.product_id !== data.product_id);
        if(removeData){
            toast.success('Delete From Wishlist !!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        };
        setWishListData(removeData);
        deleteDataFromWishlist(data);
    };

    const handleAddToCartFromWishlist = (data) => {
        const removeData = saveWishListData.filter((remData) => remData.product_id !== data.product_id);
        setWishListData(removeData);
        deleteDataFromWishlist(data);
    };

    const getPriceData = getTotalPriceDataFromLocalStore();
    const handleAddPrice = (price, priceData) => {
        if(priceData.includes(price)){
            return;
        };
        addTotalPriceToSetItem(price);
    };

    useEffect(() => {
        fetch('/allProductApi.json')
            .then((res) => res.json())
            .then((data) => setProductWishList(data))
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        if(productWishList.length){
            const wishlistData = getDataFromWishlistToLocalStore();
            setWishListData(wishlistData);

            const productWishlistData = [];
            for(const id of wishlistData){
                const findData = productWishList.find((product) => product.product_id === id.product_id);
                if(findData){
                    productWishlistData.push(findData);
                };
            };
            setWishListData(productWishlistData);
        };
    }, [productWishList]);

    return(
        <WishListContext.Provider value={{saveWishListData, productWishList, setProductWishList, handleDeleteDataToWishlist, handleAddToCartFromWishlist, handleAddPrice, getPriceData}}>
            {children}
        </WishListContext.Provider>
    );
};

WishListProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {WishListProvider, WishListContext};