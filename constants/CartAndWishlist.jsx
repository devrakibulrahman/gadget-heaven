import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from "react-router-dom";

const CartToWishlistSwitcher = createContext();

const CartToWishlistSwitcherProvider = ({children}) => {
    const [cartTabActive, setCartTabActive] = useState(true);
    const [wishListActive, setWishListActive] = useState(false);
    const pageNavigate = useNavigate();
    const pageLocation = useLocation();

    const handleTabBtn = (str) => {
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

    const handleIconBtn = (str) => {
        if(str === 'iconCart') {
            setCartTabActive(true);
            setWishListActive(false);
            pageNavigate('/dashboard');
            return;
        };

        if(str === 'iconWishlist'){
            setWishListActive(true);
            setCartTabActive(false);
            pageNavigate('/dashboard');
        };
    };

    return(
        <CartToWishlistSwitcher.Provider value={{cartTabActive, wishListActive, handleTabBtn, handleIconBtn, pageLocation}}>
            {children}
        </CartToWishlistSwitcher.Provider>
    );
};

CartToWishlistSwitcherProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CartToWishlistSwitcher, CartToWishlistSwitcherProvider };