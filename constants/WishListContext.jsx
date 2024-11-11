import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const WishListContext = createContext();

const WishListProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);
    
    return(
        <WishListContext.Provider value={{wishList, setWishList}}>
            {children}
        </WishListContext.Provider>
    );
};

WishListProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {WishListProvider, WishListContext};